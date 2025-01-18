import { createRouter, createWebHistory } from 'vue-router';

import DashboardAuctionCreateView from '@/views/dashboard/auctions/AuctionCreateView.vue';
import DashboardAuctionUpdateView from '@/views/dashboard/auctions/AuctionUpdateView.vue';
import DashboardAuctionListView from '@/views/dashboard/auctions/AuctionListView.vue';
import DashboardLotCreateView from '@/views/dashboard/lots/LotCreateView.vue';
import DashboardLotLisView from '@/views/dashboard/lots/LotLisView.vue';
import AuctionLotsView from '@/views/AuctionLotsView.vue';
import AuctionsView from '@/views/AuctionsView.vue';
import HomeView from '@/views/HomeView.vue';
import LotsView from '@/views/LotsView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/auctions',
        name: 'auctions',
        component: AuctionsView,
    },
    {
        path: '/auctions/:id/lots',
        name: 'auction.lots',
        component: AuctionLotsView,
    },
    {
        path: '/lots',
        name: 'lots',
        component: LotsView,
    },
    {
        path: '/dashboard/auctions/create',
        name: 'dashboard.auctions.create',
        component: DashboardAuctionCreateView,
    },
    {
        path: '/dashboard/auctions/update/:id',
        name: 'dashboard.auctions.update',
        component: DashboardAuctionUpdateView,
    },
    {
        path: '/dashboard/auctions',
        name: 'dashboard.auctions.list',
        component: DashboardAuctionListView,
    },
    {
        path: '/dashboard/lots',
        name: 'dashboard.lots.list',
        component: DashboardLotLisView
    },
    {
        path: '/dashboard/lots/create',
        name: 'dashboard.lots.create',
        component: DashboardLotCreateView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
});

export default router;