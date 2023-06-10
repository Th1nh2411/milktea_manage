import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import * as shopService from '../../services/shopService';
import { StoreContext, actions } from '../../store';
const cx = classNames.bind(styles);

const orderTypes = [
    { img: images.drink, name: 'Thức uống' },
    { img: images.coffee, name: 'Cà phê' },
    { img: images.tea, name: 'Trà' },
    { img: images.bakery, name: 'Bakery' },
];

function Home() {
    const [orderType, setOrderType] = useState(1);
    const [menu, setMenu] = useState([]);
    const [state, dispatch] = useContext(StoreContext);
    const getListItem = async () => {
        const results = await shopService.getItemFromShop(state.idShop, orderType);
        if (results) {
            setMenu(results.menu);
        }
    };
    useEffect(() => {
        getListItem();
    }, [orderType, state.idShop]);
    return <div className={cx('wrapper')}>Home page</div>;
}

export default Home;
