import { ListItem } from '../components/indexComponents.js';

function ItemsPage({ itemName }) {
    return (
        <>
            <div id="heading">
                <h1 className="text-center text-2xl font-bold text-[#3C3D37] sm:text-3xl">
                    Items
                </h1>
            </div>
            <div id="item-list" className="space-y-1">
                <ListItem itemName={itemName} />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        </>
    );
}

export default ItemsPage;
