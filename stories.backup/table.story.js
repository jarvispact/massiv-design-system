/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../src/box';
import Table from '../src/table';
import TableHeader from '../src/table-header';
import TableBody from '../src/table-body';
import TR from '../src/tr';
import TH from '../src/th';
import TD from '../src/td';
import Text from '../src/text';

storiesOf('Table', module)
    .add('Table', () => (
        <Box position="absolute" width="70%" p="1rem">
            <Table>
                <TableHeader>
                    <TR>
                        <TH>
                            <Text>Firstname</Text>
                        </TH>
                        <TH>
                            <Text>Lastname</Text>
                        </TH>
                        <TH>
                            <Text>Username</Text>
                        </TH>
                    </TR>
                </TableHeader>
                <TableBody>
                    <TR>
                        <TD>
                            <Text>Jarvis</Text>
                        </TD>
                        <TD>
                            <Text>Pact</Text>
                        </TD>
                        <TD>
                            <Text>@jarvispact</Text>
                        </TD>
                    </TR>
                    <TR>
                        <TD>
                            <Text>Jarvis</Text>
                        </TD>
                        <TD>
                            <Text>Pact</Text>
                        </TD>
                        <TD>
                            <Text>@jarvispact</Text>
                        </TD>
                    </TR>
                    <TR>
                        <TD>
                            <Text>Jarvis</Text>
                        </TD>
                        <TD>
                            <Text>Pact</Text>
                        </TD>
                        <TD>
                            <Text>@jarvispact</Text>
                        </TD>
                    </TR>
                    <TR>
                        <TD>
                            <Text>Jarvis</Text>
                        </TD>
                        <TD>
                            <Text>Pact</Text>
                        </TD>
                        <TD>
                            <Text>@jarvispact</Text>
                        </TD>
                    </TR>
                </TableBody>
            </Table>
        </Box>
    ));
