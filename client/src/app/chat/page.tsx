'use client'
import * as React from 'react';
import { connect, sendMsg } from '../../api'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';

class Chat extends React.Component {
    constructor(props: any) {
        super(props);
        connect();
    }

    send() {
        console.log("hello");
        sendMsg("hello");
    }

    render() {
        return (
            <Container maxWidth="lg">
                <Box
                    sx={{
                        my: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                        Chat
                    </Typography>
                    <Box sx={{ maxWidth: 'sm' }}>
                        <Button variant="contained" onClick={this.send}>
                            Hit Me!
                        </Button>
                    </Box>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}

export default Chat;