import { create } from 'tailwind-rn';
import styles from '../../styles.json';

const { tailwind, getColor } = create(styles);

export const twc = getColor;
const tw = tailwind;
export default tw;
