import React, {useState} from 'react';

interface ICard {
  id: number;
  order: number;
  text: string;
}

function App() {
  const [cardList, setCardList] = useState<ICard[]>([
    {id:1, order:1, text: 'CARD 1'},
    {id:2, order:2, text: 'CARD 2'},
    {id:3, order:3, text: 'CARD 3'},
  ]);
  const [currentCard, setCurrentCard] = useState<ICard>();

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, card: ICard) => {
    console.log('dragStart', card)
    setCurrentCard(card)
  }
  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('dragLeave')
    const el = e.target as HTMLElement
    el.style.background = 'none'
  }
  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {

  }
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log('dragOver')
    const el = e.target as HTMLElement
    el.style.background = 'lightgray'
  }
  const dragDropHandler = (e: React.DragEvent<HTMLDivElement>, card: ICard) => {
    e.preventDefault()
    console.log('drop', card)
    setCardList(cardList.map(c => {
      if(c.id === card.id) {
        return {...c, order: currentCard?.order || c.order}
      }
      if(c.id === currentCard?.id) {
        return {...c, order: card.order}
      }
      return c
    }))
    const el = e.target as HTMLElement
    el.style.background = 'none'

  }

  const sortCards = (a: ICard, b: ICard) => {
    if(a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className='App'>
      {cardList.sort(sortCards).map((card) => (
          <div
              key={card.id}
              className={'card'}
              draggable={true}
              onDragStart={(e)=> dragStartHandler(e, card)} // начало перемещения
              onDragLeave={(e)=> dragLeaveHandler(e)} // покинули элемент над которым перемещали
              onDragEnd={(e)=> dragEndHandler(e)} // конец перемещения
              onDragOver={(e)=> dragOverHandler(e)} // перемещение над объектом
              onDrop={(e)=> dragDropHandler(e, card)} // дропнули элемент
          >
            {card.text}
          </div>
      ))}
    </div>
  );
}

export default App;
