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

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, card: ICard) => {

  }
  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {

  }
  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {

  }
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {

  }
  const dragDropHandler = (e: React.DragEvent<HTMLDivElement>, card: ICard) => {

  }

  return (
    <div className='App'>
      {cardList.map((card) => (
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
