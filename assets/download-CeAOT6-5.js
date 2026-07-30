import{t as e}from"./googleSheets-C77qoy7_.js";import"./quoteBasket-6Lo7OGJ4.js";/* empty css              */import"./siteHeaderApp-yWvgCm6U.js";var t=`/images/placeholders/educore-placeholder.webp`,n=`/images/hero/logo.jpeg`,r=`https://www.educorestationery-hygiene-ppe.co.za`,i=`info@educorestationery-hygiene-ppe.co.za`,a=`071 945 0220`,o=`104 Donnelly Street, Turffontein, Johannesburg, 2190`,s=`mailto:${i}`,c=`https://wa.me/27719450220`,l=`https://www.google.com/maps/search/?api=1&query=`+encodeURIComponent(o),u={address:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="#F05A28"
        d="M12 2C7.6 2 4 5.6 4 10c0 5.7 8 12 8 12s8-6.3 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      />
    </svg>
  `,email:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="#F05A28"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
      />
    </svg>
  `,whatsapp:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="#25D366"
        d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.4-.2-3.1.8.8-3-.2-.5A8 8 0 1 1 12 20zm4.4-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.3 0-.4.1-.6l.4-.5.2-.5c.1-.2 0-.4 0-.5L9.6 8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.2.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4l-1.4-.7z"
      />
    </svg>
  `,website:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="#1A2B4C"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3a15.7 15.7 0 0 0-1.4-3.3A8 8 0 0 1 18.9 8zM12 4c.8 1 1.5 2.3 1.8 4h-3.6C10.5 6.3 11.2 5 12 4zM4.3 14a8.6 8.6 0 0 1 0-4h3.4a16.7 16.7 0 0 0 0 4H4.3zm.8 2h3a15.7 15.7 0 0 0 1.4 3.3A8 8 0 0 1 5.1 16zm3-8h-3a8 8 0 0 1 4.4-3.3A15.7 15.7 0 0 0 8.1 8zM12 20c-.8-1-1.5-2.3-1.8-4h3.6c-.3 1.7-1 3-1.8 4zm2.2-6H9.8a14.7 14.7 0 0 1 0-4h4.4a14.7 14.7 0 0 1 0 4zm.3 5.3a15.7 15.7 0 0 0 1.4-3.3h3a8 8 0 0 1-4.4 3.3zM16.3 14a16.7 16.7 0 0 0 0-4h3.4a8.6 8.6 0 0 1 0 4h-3.4z"
      />
    </svg>
  `},d={stationery:`Stationery`,furniture:`Office Furniture`,ppe:`PPE & Safety`,cleaning:`Cleaning & Hygiene`,hospital:`Hospital Equipment`},f=[],p=null,m=null;function h(e){[`pdfProductCount`,`pdfProductCount2`,`featureProductCount`].forEach(t=>{let n=document.getElementById(t);n&&(n.textContent=e)})}function g(e,t=null){let n=document.getElementById(`pdf-status`),r=document.getElementById(`pdf-progress-bar`);if(n&&(n.textContent=e),r&&t!==null){let e=Math.max(0,Math.min(100,t));r.style.width=`${e}%`}}function _(e,t=420,n=280,r=.68){return new Promise((i,a)=>{let o=URL.createObjectURL(e),s=new Image;s.onload=()=>{let e=Math.min(t/s.width,n/s.height,1),c=Math.max(1,Math.round(s.width*e)),l=Math.max(1,Math.round(s.height*e)),u=document.createElement(`canvas`);u.width=c,u.height=l;let d=u.getContext(`2d`);if(!d){URL.revokeObjectURL(o),a(Error(`Canvas could not be created.`));return}d.fillStyle=`#FFFFFF`,d.fillRect(0,0,c,l),d.drawImage(s,0,0,c,l),URL.revokeObjectURL(o),i(u.toDataURL(`image/jpeg`,r))},s.onerror=()=>{URL.revokeObjectURL(o),a(Error(`Image could not be decoded.`))},s.src=o})}async function v(e,t={}){let{maximumWidth:n=420,maximumHeight:r=280,quality:i=.68}=t,a=await fetch(e);if(!a.ok)throw Error(`Image request failed with status ${a.status}`);return _(await a.blob(),n,r,i)}async function y(e){let n=[...new Set([e.image,e.localImage,t].filter(Boolean))];for(let e of n)try{return await v(e)}catch(t){console.warn(`Catalogue image failed: ${e}`,t)}return null}async function b(){if(m)return m;try{return m=await v(n,{maximumWidth:500,maximumHeight:500,quality:.85}),m}catch(e){return console.warn(`Catalogue logo could not be prepared.`,e),null}}async function x(){if(p)return p;let e=Array(f.length),t=0,n=0;async function r(){for(;n<f.length;){let r=n++;e[r]={...f[r],pdfImage:await y(f[r])},t+=1,g(`Preparing product images: ${t} of ${f.length}`,t/f.length*100)}}let i=Math.min(5,f.length);return await Promise.all(Array.from({length:i},()=>r())),p=e,p}function S(e,t=!0){let n=(e.features||[]).slice(0,4).join(` • `),r=[];return e.pdfImage&&r.push({image:e.pdfImage,fit:[225,125],alignment:`center`,margin:[0,0,0,8]}),r.push({text:e.name||`Unnamed Product`,bold:!0,fontSize:12,color:`#1A2B4C`,margin:[0,0,0,4]},{columns:[{text:t&&e.price||`Request a Quote`,bold:!0,color:`#F05A28`,fontSize:10},{text:`SKU: ${e.sku||`N/A`}`,alignment:`right`,color:`#64748B`,fontSize:8}]},{text:e.description||`Contact EDUCORE for product specifications.`,fontSize:8.5,color:`#475569`,margin:[0,6,0,4]}),n&&r.push({text:n,fontSize:7.5,color:`#64748B`,margin:[0,2,0,0]}),r.push({text:`Unit: ${e.unit||`Each`}`,fontSize:8,bold:!0,color:`#1A2B4C`,margin:[0,5,0,0]}),{stack:r,margin:[8,8,8,8],fillColor:`#FFFFFF`}}function C(e,t=!0){let n=[];for(let r=0;r<e.length;r+=2){let i=e[r],a=e[r+1];n.push([S(i,t),a?S(a,t):{text:``,fillColor:`#FFFFFF`}])}return n}function w(e,t,n=null,r=`#1A2B4C`){let i={text:t,color:r,fontSize:9.5,alignment:`center`,margin:[0,2,0,0]};return n&&(i.link=n,i.decoration=`underline`),{width:390,margin:[166,2,166,0],table:{widths:[20,350,20],body:[[{svg:e,width:13,height:13,alignment:`center`,margin:[3,1,0,0]},i,{text:``}]]},layout:{hLineWidth:()=>0,vLineWidth:()=>0,paddingLeft:()=>0,paddingRight:()=>0,paddingTop:()=>0,paddingBottom:()=>0}}}function T(e,t,n=!0){let d=[];return t&&d.push({image:`educoreLogo`,fit:[135,135],alignment:`center`,margin:[0,0,0,8]}),d.push({text:`EDUCORE`,fontSize:30,bold:!0,color:`#1A2B4C`},{text:`PRODUCT CATALOGUE 2026`,fontSize:21,bold:!0,color:`#F05A28`,margin:[0,5,0,10]},{text:`Stationery • Office Furniture • PPE • Cleaning & Hygiene • Hospital Equipment`,fontSize:11,color:`#475569`},{text:`${e.length} products • Bulk supply • Nationwide delivery • Tender ready`,fontSize:10,color:`#64748B`,margin:[0,8,0,8]},n?{text:`COMPLETE IMAGE CATALOGUE • CURRENT PRODUCT PRICING`,fontSize:9,bold:!0,color:`#1A2B4C`,margin:[0,0,0,15]}:{text:`CLIENT PRODUCT LIST • PRICING AVAILABLE ON REQUEST`,fontSize:9,bold:!0,color:`#1A2B4C`,margin:[0,0,0,15]},w(u.address,o,l),w(u.email,i,s),w(u.whatsapp,`WhatsApp: ${a}`,c,`#25A95B`),w(u.website,`www.educorestationery-hygiene-ppe.co.za`,r,`#F05A28`),{qr:r,fit:75,alignment:`center`,foreground:`#1A2B4C`,background:`#FFFFFF`,margin:[0,8,0,0]},{text:`Scan to visit our website`,fontSize:7.5,color:`#64748B`,margin:[0,4,0,0]}),{stack:d,alignment:`center`,margin:[30,5,30,0]}}function E(e,t,n=!0){let o=[...new Set(e.map(e=>e.category))],s=[T(e,t,n)];o.forEach(t=>{let r=e.filter(e=>e.category===t);s.push({text:d[t]||t,pageBreak:`before`,fontSize:22,bold:!0,color:`#1A2B4C`,margin:[0,0,0,10]}),s.push({table:{widths:[`*`,`*`],body:C(r,n),dontBreakRows:!0},layout:{hLineColor:()=>`#E2E8F0`,vLineColor:()=>`#E2E8F0`,paddingLeft:()=>3,paddingRight:()=>3,paddingTop:()=>3,paddingBottom:()=>3}})});let c={pageSize:`A4`,pageOrientation:`landscape`,pageMargins:[30,52,30,40],header:e=>e===1?null:{columns:[t?{columns:[{image:`educoreLogo`,width:25},{text:n?`EDUCORE PRODUCT CATALOGUE`:`EDUCORE CLIENT PRODUCT LIST`,bold:!0,color:`#1A2B4C`,margin:[7,7,0,0]}]}:{text:n?`EDUCORE PRODUCT CATALOGUE`:`EDUCORE CLIENT PRODUCT LIST`,bold:!0,color:`#1A2B4C`},{text:`2026`,alignment:`right`,color:`#F05A28`,margin:[0,7,0,0]}],margin:[30,12,30,0],fontSize:9},footer:(e,t)=>({columns:[{width:`*`,stack:[{text:`${i} | ${a}`,color:`#64748B`,fontSize:7.5},{text:`www.educorestationery-hygiene-ppe.co.za`,link:r,color:`#1A2B4C`,fontSize:7}]},{width:`auto`,text:`Page ${e} of ${t}`,alignment:`right`,color:`#64748B`,fontSize:8,margin:[0,3,0,0]}],margin:[30,6,30,0]}),content:s,defaultStyle:{font:`Roboto`},info:{title:n?`EDUCORE Product Catalogue 2026`:`EDUCORE Client Product List 2026 - No Pricing`,author:`EDUCORE`,subject:n?`Image catalogue with pricing - Stationery, Office Furniture, PPE, Cleaning, Hygiene and Hospital Equipment`:`Client product list without pricing - Stationery, Office Furniture, PPE, Cleaning, Hygiene and Hospital Equipment`,keywords:`EDUCORE, stationery, PPE, hygiene, hospital equipment, catalogue`}};return t&&(c.images={educoreLogo:t}),c}async function D(e,t,n=!0){if(!window.pdfMake){alert(`The PDF library could not be loaded.`);return}if(!f.length){alert(`Products are still loading. Please try again.`);return}let r=null;if(e===`print`){if(r=window.open(``,`_blank`),!r){alert(`The catalogue window was blocked. Please allow pop-ups for this website and try again.`);return}r.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Preparing EDUCORE Catalogue</title>
          <style>
            body {
              margin: 0;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #f8fafc;
              color: #1A2B4C;
              font-family: Arial, sans-serif;
              text-align: center;
            }

            .message {
              padding: 30px;
            }

            .message h1 {
              margin-bottom: 10px;
            }
          </style>
        </head>

        <body>
          <div class="message">
            <h1>EDUCORE</h1>
            <p>Preparing your printable catalogue…</p>
          </div>
        </body>
      </html>
    `),r.document.close()}let i=t.innerHTML;t.disabled=!0,document.querySelectorAll(`#generatePdfBtn, #printPdfBtn, #generateProductListBtn`).forEach(e=>{e.disabled=!0});try{let[t,i]=await Promise.all([x(),b()]);g(`Building catalogue with logo, website and QR code…`,100);let a=E(t,i,n),o=window.pdfMake.createPdf(a);if(e===`download`)o.download(n?`educore-enhanced-product-catalogue-2026.pdf`:`educore-client-product-list-2026-no-pricing.pdf`);else{let e=await new Promise((e,t)=>{try{o.getBlob(e)}catch(e){t(e)}}),t=URL.createObjectURL(e);r.location.replace(t),setTimeout(()=>{URL.revokeObjectURL(t)},6e4)}g(`Catalogue ready. Logo, website, QR code and available product images were included.`,100)}catch(e){console.error(`Catalogue PDF failed:`,e),r&&!r.closed&&r.close(),g(`Catalogue generation failed. Please refresh and try again.`,0),alert(`Catalogue generation failed: ${e.message}`)}finally{t.innerHTML=i,document.querySelectorAll(`#generatePdfBtn, #printPdfBtn, #generateProductListBtn`).forEach(e=>{e.disabled=!1})}}document.addEventListener(`DOMContentLoaded`,async()=>{try{g(`Loading live product catalogue…`,5),f=await e(),h(f.length),g(`${f.length} products loaded. Images will be prepared when you download or print.`,0)}catch(e){console.error(`Products could not be loaded:`,e),g(`Products could not be loaded. Please refresh the page.`,0)}document.getElementById(`generatePdfBtn`)?.addEventListener(`click`,e=>{D(`download`,e.currentTarget,!0)}),document.getElementById(`printPdfBtn`)?.addEventListener(`click`,e=>{D(`print`,e.currentTarget,!0)}),document.getElementById(`generateProductListBtn`)?.addEventListener(`click`,e=>{D(`download`,e.currentTarget,!1)})});