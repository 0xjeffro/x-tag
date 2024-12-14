import '@src/Popup.css';
import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { Snippet } from '@nextui-org/snippet';
import React, { useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import * as SolarIconSet from 'solar-icon-set';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const Popup = () => {
  const [visibleComponent, setVisibleComponent] = useState('HomePage');

  const HomePage = () => (
    <div>
      <div
        style={{
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <div style={{ marginRight: 14, fontWeight: 'bold', fontSize: '18px', color: '#333', position: 'relative' }}>
          <span
            style={{
              content: '""',
              position: 'absolute',
              left: 0,
              top: '4%', // 将边框下移
              height: '92%', // 边框高度为父元素的 50%
              width: '4px',
              backgroundColor: '#11181c',
              borderRadius: '5px',
            }}></span>

          <span style={{ marginLeft: 10 }}>UID</span>
        </div>
        <Snippet symbol="" variant="bordered">
          cc66ec31-5ed3-4f54-9eb1-3ee2edf02822
        </Snippet>
      </div>
      <div style={{ padding: 20, color: '#767676' }}>
        UID is your unique identifier. If you already have one, you can import it to sync your tags across devices.
      </div>
      <Button
        size="sm"
        variant="light"
        color="primary"
        style={{ marginLeft: 280 }}
        endContent={<SolarIconSet.SquareArrowRight color="#000" size={20} iconStyle="Bold" />}
        onPress={() => {
          setVisibleComponent('ImportPage');
        }}>
        Import Existing UID
      </Button>
    </div>
  );

  const ImportPage = () => (
    <div>
      <div
        style={{
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <div style={{ marginRight: 14, fontWeight: 'bold', fontSize: '18px', color: '#333', position: 'relative' }}>
          <span
            style={{
              content: '""',
              position: 'absolute',
              left: 0,
              top: '4%',
              height: '92%',
              width: '4px',
              backgroundColor: '#11181c',
              borderRadius: '5px',
            }}></span>
          <span style={{ marginLeft: 10 }}>UID</span>
        </div>
        <Input
          key="UID"
          size="sm"
          description=""
          color="primary"
          variant="bordered"
          isClearable={true}
          label=""
          labelPlacement="outside"
          placeholder="Enter your existing UID"
        />
        <Button size="sm" disableRipple={true} variant="ghost" color="primary" style={{ marginLeft: 8, height: 30 }}>
          Save
        </Button>
      </div>
      <div style={{ padding: 20, color: '#767676' }}>
        UID is your unique identifier. If you already have one, you can import it to sync your tags across devices.
      </div>

      <Button
        size="sm"
        variant="light"
        color="primary"
        style={{ marginLeft: 8 }}
        startContent={<SolarIconSet.SquareArrowLeft color="#000" size={20} iconStyle="Bold" />}
        onPress={() => {
          setVisibleComponent('HomePage');
        }}>
        Back
      </Button>
    </div>
  );

  return (
    <div>
      {/*Header*/}
      <div
        style={{
          backgroundColor: '#11181c',
          color: 'white',
          height: 50,
          fontSize: 24,
          display: 'flex',
          alignItems: 'center',
        }}>
        <img src={chrome.runtime.getURL('popup/logo-2.png')} alt="logo" style={{ height: 36, marginLeft: 10 }} />
      </div>

      <SwitchTransition>
        <CSSTransition key={visibleComponent} timeout={140} classNames="fade" unmountOnExit>
          {visibleComponent === 'HomePage' ? <HomePage /> : <ImportPage />}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
