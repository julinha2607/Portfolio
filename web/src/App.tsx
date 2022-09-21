// A sintaxe do react é JSX: JavaScript + XML (HTML = sintaxe de tags e atributos)
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css';
import {GameBanner} from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { Input } from './components/Form/Input'
import {CreateAdModal } from './components/CreateAdModal'
import logoImg from './assets/logo-nlwesports.svg';
import { GameController, MagnifyingGlassPlus} from 'phosphor-react';
import axios from 'axios';


interface Game {
  id: string; 
  title: string; 
  bannerUrl: string;
  _count: {
    ads: number;
  } 
}

function App() {

const [games, setGames] = useState <Game[]> ([])

useEffect(() => {
  axios('http://localhost:3333/games').then(response => {
  setGames (response.data)
  })
}, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""/>

      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui!</h1>

      <div className="grid grid-cols-6 gap-6 mt-16"> 

      {games.map(game => {
        return (
       <GameBanner 
       key={game.id}
       title={game.title} 
       bannerUrl={game.bannerUrl} 
       adsCount={game._count.Ads}
       />
        )
      })}


      </div>

<Dialog.Root>

<CreateAdBanner />

<CreateAdModal />

</Dialog.Root>
      
      
      </div>

      
  )
} 


export default App
