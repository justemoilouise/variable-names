import { useDeno } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react';
import './footer.css';

export default function Footer() {
    const version = useDeno(() => {
        return Deno.version;
    });

    return (<div className="footerContainer">
        <span>Built by Aleph.js in Deno v{version.deno}</span>
    </div>);
}
