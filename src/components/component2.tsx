import React from "react";
import { Layout} from "antd";
import { Link} from "react-router-dom";


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
           <Link to="/">Back to homepage</Link>
        </Layout>
    )
}