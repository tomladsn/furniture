import { createBoard } from '@wixc3/react-board';
import { Shop } from '../../../components/pages/new-component/shop';

export default createBoard({
    name: 'Shop',
    Board: () => <Shop />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
