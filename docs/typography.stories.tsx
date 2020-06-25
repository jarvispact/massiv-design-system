import React from 'react';
import { defaultTheme } from '../src/theme';
import { Box, Text } from '../src/atoms';

const { fontFamily: themeFontFamilies, fontSize: themeFontSizes, fontWeight: themeFontWeights } = defaultTheme;

export default {
    title: 'Typography',
};

type Props = {
    headerText: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    children: React.ReactNode;
};

const TextBlock = ({ headerText, fontFamily, fontSize, fontWeight, children }: Props) => {
    return (
        <Box mb="2xl">
            <Text as="h1" fontFamily={fontFamily} fontSize="2xl">
                {headerText}
            </Text>
            <Text fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight}>
                {children}
            </Text>
        </Box>
    );
};

export const fontFamilies = () => {
    return (
        <Box w="90%" maxW="900px" ml="auto" mr="auto" mt="10px" mb="10px">
            {Object.keys(themeFontFamilies).map((key) => (
                <TextBlock key={key} headerText={key} fontFamily={themeFontFamilies[key]} fontSize="m" fontWeight="m">
                    Bacon ipsum dolor amet ribeye pork loin pastrami sausage hamburger andouille alcatra chicken
                    landjaeger corned beef sirloin. Boudin kielbasa kevin shank frankfurter sausage, corned beef tail
                    buffalo brisket pork belly landjaeger shoulder sirloin. Picanha burgdoggen kevin, kielbasa turducken
                    meatloaf pig andouille ball tip landjaeger short ribs swine tri-tip pork belly. Chicken pork
                    tenderloin venison buffalo cupim boudin kielbasa ribeye tongue tri-tip shank, rump drumstick. Salami
                    doner bresaola cupim. Pork chop tenderloin tri-tip pork loin boudin, pork belly shoulder pastrami.
                    Chislic short ribs drumstick, cupim hamburger andouille turducken meatloaf sirloin alcatra jowl pork
                    chop ham hock.
                </TextBlock>
            ))}
        </Box>
    );
};

export const fontSizes = () => {
    return (
        <Box w="90%" maxW="900px" ml="auto" mr="auto" mt="10px" mb="10px">
            {Object.keys(themeFontSizes).map((key) => (
                <TextBlock
                    key={key}
                    headerText={`${key} (${themeFontSizes[key]})`}
                    fontFamily="sans"
                    fontSize={themeFontSizes[key]}
                    fontWeight="m"
                >
                    Meatball rump tongue pancetta fatback kielbasa. Turkey pancetta doner strip steak venison capicola.
                    Doner leberkas pig salami. Capicola buffalo venison, jowl shankle meatball alcatra beef ribs kevin
                    ground round spare ribs ham hock t-bone.
                </TextBlock>
            ))}
        </Box>
    );
};

export const fontWeights = () => {
    return (
        <Box w="90%" maxW="900px" ml="auto" mr="auto" mt="10px" mb="10px">
            {Object.keys(themeFontWeights).map((key) => (
                <TextBlock
                    key={key}
                    headerText={`${key} (${themeFontWeights[key]})`}
                    fontFamily="sans"
                    fontSize="m"
                    fontWeight={themeFontWeights[key]}
                >
                    Frankfurter pastrami shank pork loin corned beef capicola, biltong chicken brisket. Capicola doner
                    tenderloin, shankle chuck turkey pork belly shoulder pig leberkas picanha hamburger strip steak
                    pastrami. T-bone salami meatloaf swine kielbasa sirloin. Sirloin ham hock corned beef, ball tip pork
                    chop strip steak flank tongue boudin beef ribs prosciutto.
                </TextBlock>
            ))}
        </Box>
    );
};
