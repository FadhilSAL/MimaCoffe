import { useState ,useEffect} from 'react'

 export default function App() {
 const [scrolled,setScrolled] = useState(false);
const [active,setActive] = useState(false);

function handleNav(){
setActive(!active)
}


 useEffect(()=>{
 const handleScroll = () =>{
  const offsett = window.scrollY

  if(offsett>563){
    setScrolled(true)
  }else{
    setScrolled(false)
  }
};

window.addEventListener('scroll',handleScroll)

return () => window.removeEventListener("scroll",handleScroll)
 },[])


  return ( 
    <>
     <nav className={`fixed top-0t w-full text-xl p-4 flex justify-between z-22 duration-400  ${scrolled ? 'bg-cyan-200 text-black shadow-2xl':'bg-transparent text-white'}`}>
      <h2 className=' font-slab tracking-widest'>MimaCoffe</h2>
      <div className='flex  w-1/4 pr-4 xs:justify-end '>
        <ul className='lg:flex lg:justify-between w-full font-slab xs:hidden ' >
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <li>About</li>
        </ul>
        <div className='flex w-8 flex-wrap lg:hidden' onClick={handleNav}>
          <span className={`w-8 bg-white block my-1 duration-400 ${active?'origin-top-left rotate-45 -translate-y-1':''}`}></span>
          <span className={`w-8 bg-white block my-1 duration-400 ${active?'scale-0':''}`}></span>
          <span className={`w-8 bg-white block my-1 duration-400  ${active?'origin-bottom-left -rotate-45':''}`}></span>
        </div>
      </div>
     </nav>
     <div className='fixed w-full h-120 top-15  z-99 overflow-x-hidden flex justify-end'>
     <div className={`absolute bg-white h-120 w-54 shadow-2xl duration-200 ${active? '':'translate-x-90'}`}>
     <ul className={`w-full flex flex-wrap text-center ${active? '':'hidden'}`}>
          <li className='w-full text-xl py-10 hover:bg-slate-200'>Home</li>
          <li className='w-full text-xl py-10 hover:bg-slate-200'>Products</li>
          <li className='w-full text-xl py-10 hover:bg-slate-200'>Cart</li>
          <li className='w-full text-xl py-10 hover:bg-slate-200'>About</li>
        </ul>
     </div>

     </div>
     <div  className='relative h-130 '>
      <img src="src/coffe2.jpg " className='h-140 w-full opacity-90 '  />
      <span className='absolute tracking-[7px] -translate-x-15 text-white text-4xl font-bold   bottom-1/2 left-32 font-should w-76'>Ayo Nikmati Secangkir Kopi</span>
      <button className='px-5 py-1 bg-blue-500 absolute text-white rounded-xl bottom-48 text-lg  left-35 hover:cursor-pointer active:bg-blue-700 active:text-slate-400 '>Lihat Product</button>
      </div>
      <div className='mt-12  mx-auto w-40'>
<h2 className='hover:underline duration-400 text-center tracking-[9px] text-2xl font-should w-full'> Products</h2>
      </div>
<div className='mt-15 flex justify-around xs:flex-wrap'>
 <div className='w-90 overflow-x-clip rounded-md pb-7 '>
     <img src="src/product1.jpeg " className='w-full h-75'  />
     <h2 className='font-bold text-center mt-12 tracking-[7px] pb-2'>Coffee | Latte</h2>
     <h2 className='w-full text-center mt-2'>Rp 17.000,00</h2>
     <div className='flex bg-red-300 rounded-xl py-1 mx-10 mt-2'>
     <img src="src/cart.png" className='w-7 h-7 ml-7' /> 
     <button className='ml-7'>Tambah Ke Cart</button>
     </div>

 </div>
 <div className=' w-90 overflow-x-clip rounded-sm pb-7'>
     <img src="src/cappucino.jpg " className='w-full h-75'  />
     <h2 className='font-bold text-center mt-12 tracking-[7px] pb-2'>Coffee | Cappucino</h2>
     <h2 className='w-full text-center mt-2'>Rp 13.000,00</h2>
     <div className='flex bg-red-300 rounded-xl py-1 mx-10 mt-2'>
     <img src="src/cart.png" className='w-7 h-7 ml-7' /> 
     <button className='ml-7'>Tambah Ke Cart</button>
     </div>

 </div>
 <div className=' w-90 overflow-x-clip rounded-md pb-7'>
     <img src="src/macchiato.webp " className='w-full h-75'  />
     <h2 className='font-bold text-center mt-12 tracking-[7px] pb-2'>Coffee | Macchiato</h2>
     <h2 className='w-full text-center mt-2'>Rp 21.000,00</h2>
     <div className='flex bg-red-300 rounded-xl py-1 mx-10 mt-2'>
     <img src="src/cart.png" className='w-7 h-7 ml-7' /> 
     <button className='ml-7'>Tambah Ke Cart</button>
     </div>
 </div>
</div>

<div className='mt-20 lg:p-8 xs:p-2 w-full' id='about' >
   <div className='bg-[url(src/cofe.jpg)] w-full h-110 relative bg-cover'>
<div className='absolute bg-gradient-to-r from-yellow-900/90 to-transparent inset-0'></div>
<h1 className='absolute lg:top-12 lg:left-20 text-white text-2xl font-sans tracking-[5px] xs:left-5 '>ABOUT</h1>
<p className='absolute lg:top-27 lg:left-20 text-white text-lg  w-140 xs:w-120 xs:top-35 xs:left-10'> MimaCoffe adalah sebuah restoran yang menjual produk coffe , restoran ini didirikan oleh Fadhil tahun pada 2025</p>
<button className='text-white lg h-15 lg:left-30 lg:top-70 absolute border-2 border-white py-4 px-8 xs:bottom-30 xs:left-40 hover:bg-white hover:text-black hover:cursor-pointer'>Selengkapnya..</button>
   </div>
</div>


<footer className='bg-slate-700 w-full h-85 mt-30 p-8 flex justify-around '>
  <h2 className='text-3xl text-white '>Footer</h2>
<div className='flex w-30 flex wrap text-white mt-2'>
<ul className='flex flex-wrap w-15 items '>
  <li className='py-2'>Home</li>
  <li className='py-2'>Products</li>
  <li className='py-2'>Cart</li>
  <li className='py-2'>About</li>
</ul>
</div>
<div>
  <h2 className='text-white text-3xl text-center'>Sosial Media Kami</h2>
<img src="src/media.png" className='w-90 h-60' />
</div>
</footer>
    </>
  )
}


