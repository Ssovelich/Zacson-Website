'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from '@/components/Loader/Loader';
import styles from '@/styles/Layout.module.css';

const MIN_DISPLAY_TIME = 600;

const RouteLoaderWrapper = ({ children }) => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
//   const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!pathname) return;

    const startTime = Date.now();
    setVisible(true);

    const timeout = setTimeout(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= MIN_DISPLAY_TIME) {
        setVisible(false);
      } else {
        setTimeout(() => setVisible(false), MIN_DISPLAY_TIME - elapsed);
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {visible && (
        <div className={styles.loaderOverlay}>
          <Loader />
        </div>
      )}
      {children}
    </>
  );
}

export default RouteLoaderWrapper;  