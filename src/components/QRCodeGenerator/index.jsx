
import { useState } from 'react';
import './styles.css';
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQRCode() {
        setQrCode(input);
    }

    return <div className="container-fluid py-3" style={{ bgcolor: "gray", }}>
        <h1>QR Code Generator</h1>
        <div>
            <input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" placeholder='QRCode' />
            <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQRCode} className="btn btn-info mx-2">Generate QR Code</button>
        </div>
        <div className="py-3">
            <QRCode
                id="qr-code-value"
                value={qrCode}
                size={400}
                bgColor="#fff"
            />
        </div>
    </div >
}