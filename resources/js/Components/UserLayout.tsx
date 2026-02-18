import React, { JSX, useState } from 'react';
import CommonHeader from './CommonHeader';
import CommonFooter from './CommonFooter';
import UserFloatingMenu from './ui/UserFloatingMenu';
import ModelClose from './Icons/ModelClose';
import Modal from 'react-modal';
import { PartnerViewContext } from '@/Hooks/PartnerViewContext';
import PartnerView from './PartnerView';

interface AppLayout {
    children?: JSX.Element | JSX.Element[];
}

const UserLayout = (props: AppLayout) => {
    const { children } = props;
    const [partnerModalIsOpen, setPartnerModalIsOpen] = useState(false);
    const [partnerData, setPartnerData] = useState<{ partner_uuid: string }>({
        partner_uuid: '',
    });

    const globalState = {
        partner_uuid: partnerData.partner_uuid,
        setPartnerView: (status: boolean) => {
            setPartnerModalIsOpen(status);
        },
        setPartnerData: (data: { partner_uuid?: string }) => {
            setPartnerData((prev) => ({ ...prev, ...data }));
        },
    };

    return (
        <div className="app-container w-screen">
            <PartnerViewContext.Provider value={globalState}>
                <div className="app-top">
                    <CommonHeader></CommonHeader>
                </div>
                <div className="app-user-main">
                    <div className="py-8 container max-w-screen-xl mx-auto app-user-main-inner">
                        <aside className="user-sidebar">
                            <UserFloatingMenu />
                        </aside>
                        <div className="grid grid-flow-col grid-cols-12 min-h-110 lg:grid-cols-[300px_1fr] grid-cols-[30px_1fr] grid-cols-[1fr] gap-2">
                            <aside className="col-span-1">&nbsp;</aside>
                            <main className="app-main min-h-100 container max-w-screen-lg px-4 col-span-11">
                                {children}
                            </main>
                        </div>
                    </div>
                </div>
                <div className="app-bottom">
                    <CommonFooter></CommonFooter>
                </div>

                <Modal
                    isOpen={partnerModalIsOpen}
                    contentLabel="Login Verification"
                    className="model-content-partner"
                    style={{ overlay: { background: 'rgba(0, 0, 0, 0.75)' } }}
                >
                    <ModelClose
                        closeModelBox={setPartnerModalIsOpen}
                        modelStyle="model-close-btn"
                    />
                    <div className="w-full px-5 py-10 h-screen">
                        <PartnerView />
                    </div>
                </Modal>
            </PartnerViewContext.Provider>
        </div>
    );
};

export default UserLayout;
