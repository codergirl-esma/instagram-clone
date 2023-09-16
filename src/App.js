import resim from './img/screenshot1-2x.png';
import resim3 from './img/screenshot2-2x.png'
import resim1 from './img/resim.png';
import resim2 from './img/resim2.png';
import {useEffect, useRef, useState} from 'react';
import Input from './component/Input'
import {AiFillFacebook} from 'react-icons/ai'


function App() {

  const ref = useRef();
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');

  const enable = username && password;



    useEffect(() =>{
    
    let images = ref.current.querySelectorAll('img'),
    toplam = images.length, 
    current = 0; // resmin sırasını izlemek için

    const ImageSLider = ()=>{
      
        if(current >0 ){
          images[current -1].classList.add('opacity-0'); //eğer resim sırası 0'dan büyükse bir önceki resmi saydam hale getirir.
        }
        else{
          images[toplam -1].classList.add('opacity-0');
        }
        images[current].classList.remove('opacity-0')
        if(current == toplam -1){
          current = 0
        }
        else{
          current += 1;
        }
    
    }
    
    let interval = setInterval(ImageSLider, 3000)
    return () =>{
      clearInterval(interval);
    }

    },[ref]) //REF GÜNCELLENDİĞİNDE ÇALIŞIR.
  return (
   <>
    <div className="h-full w-full gap-x-8 flex items-center justify-center">
      <div className='w-[380px] h-[581px] relative bg-insta-logo bg-[length:468.32px_634.15px] bg-[top_left_-46px]'>
        <div className='w-[230px] h-[530px] absolute top-[27px] right-[26px]' ref={ref}>
        <img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-550 ease-linear' src={resim} />
        <img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-550 ease-linear' src={resim3} />
        <img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-550 ease-linear' src={resim1} />
        <img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-550 ease-linear' src={resim2} />
      </div>
      </div>


      <div className='w-[350px] grid gap-y-4'>

    <div className=' bg-white border p-[40px] pb-[10px]'>
      <a href="#" className='flex items-center justify-center'>      
      <img className='h-[91px]'  src='https://static.cdninstagram.com/rsrc.php/v3/yc/r/Ho0O6w_61Rh.png' />
     </a>
      <form className='grid gap-y-1.5'>

        <Input type="text" 
        value={username} 
        onChange={e =>setUsername(e.target.value)} 
        label="Phone number, username or email"/>
       <Input type="password" 
       value={password} 
       onChange={e =>setPassword(e.target.value)} 
       label="Password" />
      

        <button type='submit' disabled={!enable} className='h-[38px] bg-blue-500 text-white text-sm rounded'> Log In</button>

        <div className='flex items-center'>
          <div className='h-px bg-gray-300 flex-1' /> 
          <span className='px-4 text-sm my-4'>OR</span>
          <div className='h-px bg-gray-300 flex-1' />
        </div>

        <a href='#' className='flex justify-center items-center text-sm gap-x-2 text-facebbok'>
        <AiFillFacebook size={18}/>  Facebook ile giriş yap!
        </a>
      
      <a href="#">
      <span className='flex justify-center items-center text-xs mt-[8px] text-link'>Fargot Password?</span>
      </a>

      </form>
        
      

    </div>

    <div className=' bg-white border p-[15px] pb-[10px]'>

      <div className='flex justify-center items-center gap-x-2'>
        <span className=' '>Don't have an account? </span>
        <a href="#" className='font-semibold text-brand' style={{color : 'blue'}}>Sign Up</a>
      </div>

    </div>
    </div>
  </div>
  
   </>
  );
}

export default App;
