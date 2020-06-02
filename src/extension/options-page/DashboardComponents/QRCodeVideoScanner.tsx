import React, { useRef } from 'react'
import { hasWKWebkitRPCHandlers } from '../../../utils/iOS-RPC'
import { WKWebkitQRScanner } from '../../../components/shared/qrcode'
import { useQRCodeVideoScan } from '../../../utils/hooks/useQRCodeVideoScan'

export interface QRCodeVideoScannerProps {
    scanning: boolean
    onScan: (value: string) => void
    onError: () => void
    onQuit: () => void
}

export function QRCodeVideoScanner({ scanning, onScan, onError, onQuit }: QRCodeVideoScannerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    useQRCodeVideoScan(videoRef, scanning, onScan, onError)

    return hasWKWebkitRPCHandlers ? (
        <WKWebkitQRScanner onScan={onScan} onQuit={onQuit} />
    ) : (
        <video style={{ minWidth: 404 }} ref={videoRef} aria-label="QR Code scanner" />
    )
}