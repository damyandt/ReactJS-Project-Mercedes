import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { CatalogItem } from './CatalogItem';
import { BrowserRouter } from 'react-router-dom';

describe('Catalog Item Component', () => {
    test('Show model', () => {
        const model = 'Test Year';

        render(
            <BrowserRouter>
                <CatalogItem _id={'id'} model={model} />
            </BrowserRouter>
        );

        expect(screen.queryByText(`Mercedes ${model}`)).toBeInTheDocument();
    });

    test('Click on details', async () => {
        global.window = { location: { pathname: null } };
        const itemId = 'id';

        render(
            <BrowserRouter>
                <CatalogItem _id={itemId} />
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Details'));

        expect(global.window.location.pathname).toContain(`/catalog/${itemId}`);
    });
});