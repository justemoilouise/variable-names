import React from 'https://esm.sh/react';
import { Import } from "https://deno.land/x/aleph/mod.ts"
import Header from '../components/header/header.tsx';
import Footer from '../components/footer/footer.tsx';

export default function Home() {
    return (
        <React.Fragment>
            <Import from="../style/index.less" />
            <Header />
            <p>I am groot. I am groot.</p>
            <p>I am groot. I am groot.</p>
            <p>I am groot. I am groot.</p>
            <Footer />
        </React.Fragment>
    );
}
