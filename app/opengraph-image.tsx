import {ImageResponse} from 'next/og';
export const alt='XPlans Utilidades — por David Xavier';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#edf2e6',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:80,color:'#172b27'}}><div style={{fontSize:38,fontWeight:800}}>xplans.</div><div style={{fontSize:76,fontWeight:700,marginTop:80}}>Pequenas ferramentas.</div><div style={{fontSize:76,color:'#176b4c'}}>Grandes facilidades.</div><div style={{fontSize:25,marginTop:55}}>CEP e câmbio • Por David Xavier</div></div>,size)}
