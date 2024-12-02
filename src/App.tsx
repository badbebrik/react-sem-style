import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Stack } from '@mui/material';
import ArticleAccordion from './components/ArticleAccordion';
import { lightTheme, darkTheme } from './theme';
import ThemeToggle from './components/ThemeToggle';

const articles = [
  { title: 'Gamers Nexus Criticizes NZXT\'s Flex PC Rental Program', content: 'Gamers Nexus, a renowned YouTube channel focusing on PC gaming hardware, has accused NZXT\'s Flex PC rental program of deceptive practices. The program, which allows customers to rent prebuilt gaming PCs starting at $59 per month, has been criticized for frequently changing specifications and prices, leading to customer confusion. Additionally, the program\'s pricing scheme and aggressive terms of service suggest that renters may end up paying more than if they purchased the PCs outright. ' },
  { title: 'Nintendo and Sony Face Challenges This Holiday Season', content: 'During the 2024 holiday season, Nintendo and Sony are encountering difficulties due to aging consoles and a lack of major new releases. Sony\'s new PlayStation 5 Pro, aimed at serious gamers, comes with a high price tag, presenting both advantages and disadvantages in the market. Additionally, there\'s a growing trend towards online gaming across various devices, which could shift how games are consumed, moving away from dedicated consoles to platforms like phones and computers. ' },
  { title: 'Amazon\'s Cyber Monday Deals on Gaming Products', content: 'Amazon\'s Cyber Monday event is live, offering significant savings across various product categories, including gaming. Top deals feature substantial discounts on popular brands like Apple, Dyson, Samsung, and LEGO. Highlighted gaming deals include the Apple Watch SE (2nd Gen), Series 10, and Ultra 2 models, all featuring health tracking and GPS capabilities. Additionally, the Amazon Fire TV Stick 4K is available for an enhanced streaming experience.' },
  { title: 'Ubisoft Developing Game Combining Elements of Animal Crossing and Minecraft', content: 'Ubisoft is working on a new game known as Alterra, which combines elements of Animal Crossing and Minecraft. The game has been in development for 18 months and utilizes resources from a canceled title. Players will reside on an island inhabited by characters called Matterlings and can travel to other worlds with different biomes, characters, and materials. The construction mechanics are similar to Minecraft, requiring the collection of specific materials. Characters have designs reminiscent of Funko Pop figures, inspired by fantasy beings like dragons and swamp monsters, as well as real animals. Further details and the release date have yet to be announced. ' },
];

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        <Stack spacing={2}>
          {articles.map((article, index) => (
            <ArticleAccordion
              key={index}
              title={article.title}
              content={article.content}
              isOdd={index % 2 === 0}
            />
          ))}
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default App;
