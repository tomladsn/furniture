import { createBoard } from '@wixc3/react-board';
import { Shopcard } from '../../../components/shopcard/shopcard';

export default createBoard({
    name: 'Shopcard',
    Board: () => <Shopcard />,
    isSnippet: true,
});