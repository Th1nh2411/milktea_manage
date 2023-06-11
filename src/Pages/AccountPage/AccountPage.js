import styles from './AccountPage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import * as shopService from '../../services/shopService';
import { StoreContext, actions } from '../../store';
const cx = classNames.bind(styles);

function AccountPage() {
    return <div className={cx('wrapper')}>AccountPage page</div>;
}

export default AccountPage;