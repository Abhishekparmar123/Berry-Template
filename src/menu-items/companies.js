// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const companies = {
    id: 'companies',
    title: 'Companies',
    type: 'group',
    children: [
        {
            id: 'companies',
            title: 'Companies',
            type: 'item',
            url: '/companies',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default companies;
