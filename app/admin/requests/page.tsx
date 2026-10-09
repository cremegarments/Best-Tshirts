"use client";
import {useEffect,useMemo,useState,type FormEvent} from "react";
import Link from "next/link";
import "./requests.css";

type Status="New"|"Reviewing"|"Quoted"|"Won"|"Closed";
const statuses:Status[]=["New","Reviewing","Quoted","Won","Closed"];
type Item={id:string;createdAt:string;status:Status;name:string;company:string;email:string;phone:string;service:string;category:string;quantity:number;budget:string;deadline:string;delivery:string;details:string;artwork:string;attachmentName?:string};
export default function RequestsDashboard(){
 const [authenticated,setAuthenticated]=useState(false);
 const [password,setPassword]=useState("");
 const [notice,setNotice]=useState("");
 const [loading,setLoading]=useState(false);
 const [items,setItems]=useState<Item[]>([]);
 const [query,setQuery]=useState("");
 const [filter,setFilter]=useState("All");
 const [expanded,setExpanded]=useState<string|null>(null);
 async function load(){
  const r=await fetch("/api/admin/requests",{credentials:"same-origin",cache:"no-store"});
  if(r.status===401){setAuthenticated(false);return}
  const d=await r.json() as {items?:Item[];message?:string};
  if(!r.ok){setNotice(d.message||"Could not load requests");return}
  setAuthenticated(true);setItems(d.items||[]);setNotice("");
 }
 useEffect(()=>{void load()},[]);
 async function login(e:FormEvent){
  e.preventDefault();setLoading(true);setNotice("");
  try{const r=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password})});const v=await r.json() as {message?:string};if(!r.ok)throw Error(v.message||"Sign in failed");setPassword("");await load();}
  catch(e){setNotice(e instanceof Error?e.message:"Could not sign in")}
  finally{setLoading(false)}
 }
 async function update(item:Item,status:Status){
  setNotice("");
  const r=await fetch("/api/admin/requests",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:item.id,status})});
  if(!r.ok){setNotice("Could not update request status. Try again.");return}
  setItems(old=>old.map(x=>x.id===item.id?{...x,status}:x));
 }
 async function logout(){await fetch("/api/admin/logout",{method:"POST"});setAuthenticated(false);setItems([])}
 const filtered=useMemo(()=>items.filter(i=>(filter==="All"||i.status===filter)&&`${i.name} ${i.company} ${i.service} ${i.id}`.toLowerCase().includes(query.toLowerCase())),[items,filter,query]);
 return <main className="crm-shell">
  <header className="crm-top"><Link href="/">CRÈME <small>PRODUCTS / PRODUCTION</small></Link><span>PRIVATE RFQ WORKSPACE</span></header>
  {!authenticated?<section className="crm-login"><p className="crm-eyebrow">AUTHORIZED BUSINESS ACCESS</p><h1>YOUR REQUESTS.<br/><em>ALL IN ONE PLACE.</em></h1><p>Sign in to review your corporate inquiries. This area is not available to customers.</p><form onSubmit={login}><label>ADMIN PASSWORD<input type="password" minLength={20} autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} required/></label><button disabled={loading}>{loading?"SIGNING IN…":"SIGN IN ↗"}</button></form>{notice&&<p role="alert" className="crm-alert">{notice}</p>}</section>:
  <section className="crm-console"><div className="crm-bar"><div><p className="crm-eyebrow">CRÈME / OWNER OPERATIONS</p><h1>INQUIRY DESK<span>.</span></h1><p>Requests from your website · Records kept for up to 180 days</p></div><div><button onClick={()=>void load()}>Refresh</button><button onClick={()=>void logout()}>Sign out</button></div></div>
  <div className="crm-summary">{["New","Reviewing","Quoted","Won"].map(s=><div key={s}><strong>{items.filter(x=>x.status===s).length}</strong><span>{s}</span></div>)}</div>
  <div className="crm-filters"><input aria-label="Search requests" placeholder="Search company, buyer or reference" value={query} onChange={e=>setQuery(e.target.value)}/><select aria-label="Filter by status" value={filter} onChange={e=>setFilter(e.target.value)}>{["All",...statuses].map(s=><option key={s}>{s}</option>)}</select></div>
  {notice&&<p role="alert" className="crm-alert">{notice}</p>}
  <div className="crm-list">{filtered.length===0&&<p className="crm-empty">No matching inquiries yet.</p>}{filtered.map(i=><article className="crm-item" key={i.id}><button className="crm-item-head" type="button" onClick={()=>setExpanded(expanded===i.id?null:i.id)} aria-expanded={expanded===i.id}><span><b>{i.company||i.name}</b><small>{i.service} · {i.category||"Other"}</small></span><span><b>{i.status}</b><small>{new Date(i.createdAt).toLocaleDateString("en-GB")} · {i.id.slice(0,8).toUpperCase()}</small></span><span aria-hidden="true">{expanded===i.id?"−":"+"}</span></button>{expanded===i.id&&<div className="crm-details"><div className="crm-data"><p><b>Buyer</b> {i.name}</p><p><b>Email</b> <a href={`mailto:${i.email}`}>{i.email}</a></p><p><b>Phone</b> {i.phone||"—"}</p><p><b>Quantity</b> {i.quantity}</p><p><b>Budget</b> {i.budget?`CI$${i.budget}`:"Not provided"}</p><p><b>Needed by</b> {i.deadline||"—"}</p><p><b>Delivery</b> {i.delivery||"—"}</p><p><b>Attachment</b> {i.attachmentName?`${i.attachmentName} (see owner email)`:"—"}</p></div><h3>Project brief</h3><pre>{i.details}</pre>{i.artwork&&<a href={i.artwork} target="_blank" rel="noopener noreferrer">Open buyer reference link ↗</a>}<label className="crm-status">STATUS<select value={i.status} onChange={e=>void update(i,e.target.value as Status)}>{statuses.map(s=><option key={s}>{s}</option>)}</select></label></div>}</article>)}</div>
  <p className="crm-footnote">This dashboard is available only when your private database and admin credentials are configured in Vercel. Files are sent by email, not saved in the dashboard.</p></section>}
 </main>;
}
