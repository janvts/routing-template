import React, {useState} from "react";
import {Breadcrumb, Layout, Menu, MenuProps, theme} from "antd";


export const Component2: React.FC = () =>{
    return(
        <Layout style={{ minHeight: '100vh' }}>
            <Layout>
                <i>Example component 2</i>
                <div
                    style={{
                        backgroundImage:
                            'url("https://iot4h.de/wp-content/uploads/2023/03/TMDT_Logo_complete.png")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        width: '100%',
                        height: '300px',
                    }}
                ></div>
            </Layout>
        </Layout>
    )
}