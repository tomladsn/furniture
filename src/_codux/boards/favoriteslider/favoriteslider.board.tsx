import { createBoard } from '@wixc3/react-board';
import { Favoriteslider } from '../../../components/favoriteslider/favoriteslider';

export default createBoard({
    name: 'Favoriteslider',
    Board: () => <Favoriteslider />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1466,
    },
});
