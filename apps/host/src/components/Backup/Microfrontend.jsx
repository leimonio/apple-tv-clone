import React, { useEffect, useRef, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export function Microfrontend({ name, host, placeholder: Placeholder }) {
    const ref = useRef();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const scriptId = `micro-frontend-script-${name}`;

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        fetch(`${host}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                const script = document.createElement('script');
                script.id = scriptId;
                script.crossOrigin = '';
                script.src = `${host}${manifest?.files['main.js']}`;
                script.onload = () => {
                    setIsLoading(false)
                    renderMicroFrontend();
                };
                document.head.appendChild(script);
            });

        return () => {
            window?.[`unmount${name}`]?.();
        };
    }, []);

    const renderMicroFrontend = () => {
        window?.[`render${name}`]?.(ref?.current);
    };
    
    return (
      <>
        <div ref={ref} />
        {isLoading && Placeholder && <Placeholder />}
      </>
    )
}

export default function MicrofrontendErrorBoundary (props) {
    const { name } = props;
    return (
        <ErrorBoundary fallback={<div>There was a problem with loading: {name}</div>}>
            <Microfrontend {...props} />
        </ErrorBoundary>
    );
}