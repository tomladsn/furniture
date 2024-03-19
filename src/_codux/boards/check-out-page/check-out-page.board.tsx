import { createBoard } from '@wixc3/react-board';
import { CheckOutPage } from '../../../components/pages/check-out-page/check-out-page';

export default createBoard({
    name: 'CheckOutPage',
    Board: () => <CheckOutPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
