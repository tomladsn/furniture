import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 708,
        canvasWidth: 1216,
        windowWidth: 1920,
        windowHeight: 1080,
        canvasBackgroundColor: '#ffffff',
    },
});
