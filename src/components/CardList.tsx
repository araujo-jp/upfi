import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { onOpen, onClose, isOpen } = useDisclosure()

  // TODO SELECTED IMAGE URL STATE
  const [currentImgUrl, setCurrentImgUrl] = useState('')

  // TODO FUNCTION HANDLE VIEW IMAGE
  function hadleViewImage(url: string): void {
    onOpen()
    setCurrentImgUrl(url)
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards.map(card => (
          <Card key={card.id} viewImage={hadleViewImage} data={card} />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={currentImgUrl} />
    </>
  );
}
