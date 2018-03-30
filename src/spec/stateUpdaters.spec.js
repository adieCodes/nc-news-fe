import { expect } from 'chai';
import {
  collectionVote,
  limitVote,
  controlledFormInput,
  removeCommentFromState
} from '../stateUpdaters';

describe('#StateUpdaters', () => {
  describe('#collectionVote', () => {
    it('does not mutate state', () => {
      const originalArticles = [
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3cf7',
          title: "What does Jose Mourinho's handwriting say about his personality?",
          body:
            "Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United's manager was clearly impressed with the Austrian's performance.",
          created_by: 'tickle122',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3cfd',
          title: 'Who are the most followed clubs and players on Instagram?',
          body:
            "Manchester United are the UK's most popular club on Instagram, with over 14m people following their account for their latest photos and videos. United's total number of followers is over six million more than second-placed Arsenal (8.1m), while Chelsea are third on the list with 7.7m followers, according to data exclusively compiled for Sky Sports. Instagram has a 500m-strong community, with one in three people on the social media site (around 165m) following a sports account.",
          created_by: 'cooljmessy',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3d05',
          title: 'Thanksgiving Drinks for Everyone',
          body:
            'Thanksgiving is a foodie’s favorite holiday. Mashed potatoes, cranberry sauce, stuffing, and last but not least, a juicy turkey. Don’t let your meticulous menu fall short of perfection; flavorful cocktails are just as important as the meal. Here are a few ideas that will fit right into your festivities.',
          created_by: 'grumpy19',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3d0a',
          title: 'Halal food: Keeping pure and true',
          body:
            "CHINA’S cities abound with restaurants and food stalls catering to Muslims as well as to the many other Chinese who relish the distinctive cuisines for which the country’s Muslims are renowned. So popular are kebabs cooked by Muslim Uighurs on the streets of Beijing that the city banned outdoor grills in 2014 in order to reduce smoke, which officials said was exacerbating the capital’s notorious smog (the air today is hardly less noxious). Often such food is claimed to be qing zhen, meaning 'pure and true', or halal, prepared according to traditional Islamic regulations. But who can tell? Last year angry Muslims besieged a halal bakery in Xining, the capital of Qinghai province, after pork sausages were found in the shop’s delivery van. There have been several scandals in recent years involving rat meat or pork being sold as lamb. These have spread Muslim mistrust of domestically produced halal products.",
          created_by: 'cooljmessy',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0bd82b0c94600c3d0c',
          title: 'The Notorious MSG’s Unlikely Formula For Success',
          body:
            "The 'umami' craze has turned a much-maligned and misunderstood food additive into an object of obsession for the world’s most innovative chefs. But secret ingredient monosodium glutamate’s biggest secret may be that there was never anything wrong with it at all.",
          created_by: 'weegembump',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0bd82b0c94600c3d10',
          title: "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
          body:
            'Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.',
          created_by: 'tickle122',
          belongs_to: 'coding',
          __v: 0
        },
        {
          votes: 9,
          _id: '5aa01a0ad82b0c94600c3d08',
          title: 'Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams',
          body:
            "What if, for once, your Thanksgiving sides were just as dazzling as the centerpiece turkey? Imagine a world where presenting a platter of seasonal vegetables inspires the same amount of cooing that the turkey does. Welcome to the world of twice-baked butternut squash. Sure, you could just roast some squash wedges and call it a day. But where's the fun in that? To make this year's most impressive vegetable side, Epi's food director Rhoda Boone gave super-seasonal butternut squash the twice-baked potatoes treatment: Mash the inside of the vegetable with butter, cream, and anything else that might make it more delicious, then pile it back into the vegetable, bake it until golden and velvety. The result is a jaw-dropping, brightly colored sweet-meet-savory butternut squash side dish. Here are just a few more reasons this creation belongs on this year's Thanksgiving table:",
          created_by: 'happyamy2016',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 9,
          _id: '5aa01a0bd82b0c94600c3d0e',
          title: 'The vegan carnivore?',
          body:
            'The chef Richard McGeown has faced bigger culinary challenges in his distinguished career than frying a meat patty in a little sunflower oil and butter. But this time the eyes and cameras of hundreds of journalists in the room were fixed on the 5oz (140g) pink disc sizzling in his pan, one that had been five years and €250,000 in the making. This was the world’s first proper portion of cultured meat, a beef burger created by Mark Post, professor of physiology, and his team at Maastricht University in the Netherlands. Post (which rhymes with ‘lost’, not ‘ghost’) has been working on in vitro meat (IVM) since 2009. On 5 August this year he presented his cultured beef burger to the world as a ‘proof of concept’. Having shown that the technology works, Post believes that in a decade or so we could see commercial production of meat that has been grown in a lab rather than reared and slaughtered. The comforting illusion that supermarket trays of plastic-wrapped steaks are not pieces of dead animal might become a discomforting reality.',
          created_by: 'jessjelly',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 9,
          _id: '5aa01a0bd82b0c94600c3d0f',
          title: 'Running a Node App',
          body:
            'This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.',
          created_by: 'tickle122',
          belongs_to: 'coding',
          __v: 0
        },
        {
          votes: 8,
          _id: '5aa01a0ad82b0c94600c3d00',
          title: 'Defensive Metrics: Measuring the Intensity of a High Press',
          body:
            'In this article, with the use of detailed Opta data, I am going to create a metric that I believe can quantify the extent and aggression of high presses employed by teams, both over a season and in any specific match. I’m going to see if it is possible define the intensity of a press with the use of numbers, more specifically by using some of the events that Opta record. Why would anyone want to do this? Well, for pretty much the same reason that we undertake any analytics study. If we can develop an objective scale which measures the intensity of a press then coaches can quickly see at a glance the strength, or otherwise, of the high pressing that their opposition has utilised in recent games. Teams or fans can also assess how much pressure their team exerted on the opposition in deep positions, and who knows, perhaps in time we will be able to assess the effectiveness that individual players have on the ability of their team to press. In essence we can take what is otherwise a subjective description and reduce it to one number so that it allows for comparison, analysis and ranking, if so desired.',
          created_by: 'weegembump',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 8,
          _id: '5aa01a0bd82b0c94600c3d12',
          title: 'Making sense of Redux',
          body:
            'When I first started learning React, I remember reading lots of articles about the different technologies associated with it. In particular, this one article stood out. It mentions how confusing the ecosystem is, and how developers often feel they have to know ALL of the ecosystem before using React. And as someone who’s used React daily for the past 8 months or so, I can definitely say that I’m still barely scratching the surface in terms of understanding how the entire ecosystem works! But my time spent using React has given me some insight into when and why it might be appropriate to use another technology — Redux (a variant of the Flux architecture).',
          created_by: 'grumpy19',
          belongs_to: 'coding',
          __v: 0
        },
        {
          votes: 8,
          _id: '5aa01a0bd82b0c94600c3d13',
          title: 'Please stop worrying about Angular 3',
          body:
            'Another Angular version planned already? Whaaaat? Didn’t Angular 2 just ship? Why Angular 3? What? Why? First off, there is no massive rewrite, and won’t be for Angular 3. Secondly, let me explain the future of Angular 2 and what Angular 3, Angular 4 will mean for you.',
          created_by: 'happyamy2016',
          belongs_to: 'coding',
          __v: 0
        },
        {
          votes: 8,
          _id: '5aa01a0bd82b0c94600c3d17',
          title: 'Learn HTML5, CSS3, and Responsive WebSite Design in One Go',
          body:
            'Both CSS3 and HTML5 are just about fully supported in all modern browsers, and we there are techniques in place to patch old browsers that lack support. So there is no disadvantage to using CSS3 and HTML5 today. The opposite is true, however: there are many painful, frustrating disadvantages with forgoing HTML5 and CSS3. You may already “know” a bit of HTML5 and a touch of CSS3 (or perhaps you probably know enough old-school HTML and CSS), and with this knowledge, you might have thought you needn’t learn HTML5 and CSS3 fully.',
          created_by: 'weegembump',
          belongs_to: 'coding',
          __v: 0
        },
        {
          votes: 7,
          _id: '5aa01a0ad82b0c94600c3d06',
          title: 'High Altitude Cooking',
          body:
            'Most backpacking trails vary only a few thousand feet elevation. However, many trails can be found above 10,000 feet. But what many people don’t take into consideration at these high altitudes is how these elevations affect their cooking.',
          created_by: 'grumpy19',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 7,
          _id: '5aa01a0ad82b0c94600c3d09',
          title: 'What to Cook This Week',
          body:
            'Good morning. Here’s the plan for the week, not including breakfast because I’m on a farina kick and that’s not to everyone’s taste, and not including lunch because really when it comes to the midday hours you should get out of the office or the house and walk around. If you get something to eat, great, but the most important thing is to be outside where the stories are. There’s nothing happening at your desk but a screen. Anyway! I’m thinking chicken paprikash for dinner tonight, a nod toward the coming fall, served over buttery egg noodles, with green beans on the side. If you have the time, make an apple cake for dessert.',
          created_by: 'cooljmessy',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 6,
          _id: '5aa01a0ad82b0c94600c3cfe',
          title: 'History of Football',
          body:
            'It may come as a surprise to many, but football has a long and interesting history; sources suggest that the sport was first introduced in England as early as 1170 when an account describes youths going to the fields for a ‘game of ball’. Aspects of the game can even be traced back to as early as the second and third century BC in China. Sources taken from military manuals at the time describe an exercise called Tsu’ Chu, in which opponents used a leather ball filled with feathers and hair. The aim was to get the ball into a small net fixed on to bamboo canes while also defending themselves from attacks. Variations of the game are also documented in Egyptian and Greek society, proving that the sport has a long tradition throughout history.',
          created_by: 'cooljmessy',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 6,
          _id: '5aa01a0ad82b0c94600c3d02',
          title: 'Game of talents: management lessons from top football coaches',
          body:
            'At lunchtime on the day of the Champions League final in 2012, Chelsea’s manager Roberto Di Matteo had selected 10 of his 11 players. He just didn’t know who to play in left midfield. The player would have to combat Bayern Munich’s brilliant Arjen Robben and Philipp Lahm. Going into the last team meeting, Di Matteo had a private chat with his left-back, Ashley Cole. He outlined the situation, then asked Cole who he would play at left-midfield. Instead of naming a seasoned star, Cole said: “Ryan Bertrand.” The 22-year-old reserve Bertrand had never played in the Champions League, let alone in club football’s biggest game. “Why?” asked Di Matteo, surprised. “I trust him,” replied Cole. Bertrand played well, and Chelsea beat Bayern on penalties. In part, this was a victory for talent management. Di Matteo had put aside his ego, and let trust between two players drive the decision. Talent management has been a business obsession at least since 1997, when the consultancy McKinsey identified a “war for talent”. The most visible battleground of this “war” is team sport. Football, in particular, is “the quintessential model for modern-day talent-dependent business”, writes Chris Brady, professor at Salford Business School. Big football clubs pay more than half their revenues to between 3 and 7 per cent of their workforce: the players. These young men are rich, multinational, mobile, often equipped with large egos and therefore hard to manage. Football managers are, above all, talent managers.',
          created_by: 'jessjelly',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 6,
          _id: '5aa01a0bd82b0c94600c3d14',
          title:
            'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals',
          body:
            'Functions are objects in JavaScript, as you should know by now, if you have read any of the prerequisite articles. And as objects, functions have methods, including the powerful Apply, Call, and Bind methods. On the one hand, Apply and Call are nearly identical and are frequently used in JavaScript for borrowing methods and for setting the this value explicitly. We also use Apply for variable-arity functions; you will learn more about this in a bit.',
          created_by: 'happyamy2016',
          belongs_to: 'coding',
          __v: 0
        },
        {
          votes: 6,
          _id: '5aa01a0bd82b0c94600c3d16',
          title: 'Express.js: A Server-Side JavaScript Framework',
          body:
            'You’re probably aware that JavaScript is the programming language most often used to add interactivity to the front end of a website, but its capabilities go far beyond that—entire sites can be built on JavaScript, extending it from the front to the back end, seamlessly. Express.js and Node.js gave JavaScript newfound back-end functionality—allowing developers to build software with JavaScript on the server side for the first time. Together, they make it possible to build an entire site with JavaScript: You can develop server-side applications with Node.js and then publish those Node.js apps as websites with Express. Because Node.js itself wasn’t intended to build websites, the Express framework is able to layer in built-in structure and functions needed to actually build a site. It’s a pretty lightweight framework that’s great for giving developers extra, built-in web application features and the Express API without overriding the already robust, feature-packed Node.js platform. In short, Express and Node are changing the way developers build websites.',
          created_by: 'cooljmessy',
          belongs_to: 'coding',
          __v: 0
        },
        {
          votes: 6,
          _id: '5aa01a0bd82b0c94600c3d1a',
          title: 'The battle for Node.js security has only begun',
          body:
            'The founder of the Node Security Project says Node.js still has common vulnerabilities, but progress has been made to make it more secure. Appearing at the recent Node Community Convention in San Francisco, project founder Adam Baldwin, chief security officer at Web consulting company &yet, emphasized risks, protections, and progress. Baldwin sees four risks within the Node ecosystem pertinent to the enterprise: the code dependency tree, bugs, malicious actors, and people. I think of [the dependency tree] more as the dependency iceberg, to be honest, Baldwin said, where your code is the ship and your dependencies that you have with your packaged JSON is that little tiny iceberg at the top. But developers need to be aware of the massive iceberg underneath, he stressed.',
          created_by: 'jessjelly',
          belongs_to: 'coding',
          __v: 0
        },
        {
          votes: 5,
          _id: '5aa01a0ad82b0c94600c3cf9',
          title: 'Why do England managers keep making the same mistakes?',
          body:
            'When Roy Hodgson resigned after this summer’s debacle, the England managerial merry go-round set into motion raising hopes that change would improve the nations fortunes.  In came Sam Allardyce but the same old squad was announced – apart from Michail Antonio – resulting in a similar type performance that was customary this summer. I was an advocate of Big Sam’s appointment because of the fact he managed down the league and could see that talent lay beyond just the big clubs in the country. Roy had many faults but the biggest frustration for me was he failed to utilise an already diminished pool of English players by continuing to pick the so called elite players – who are all tainted with failure. To be fair to Allardyce his first England game came so early in the season that it made making whole sale changes difficult. We shall never know if he would have picked different players. Since he left the job it was up to Gareth Southgate to take on the mantle and again hope arose that he may start to pick some of the talented under 21s that he has worked with over the last five years.',
          created_by: 'grumpy19',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 5,
          _id: '5aa01a0bd82b0c94600c3d11',
          title: '22 Amazing open source React projects',
          body:
            'This is a collection of open source apps built with React.JS library. In this observation, we compared nearly 800 projects to pick the top 22. (React Native: 11, React: 11). To evaluate the quality, Mybridge AI considered a variety of factors to determine how useful the projects are for programmers. To give you an idea on the quality, the average number of Github stars from the 22 projects was 1,681.',
          created_by: 'grumpy19',
          belongs_to: 'coding',
          __v: 0
        },
        {
          votes: 5,
          _id: '5aa01a0bd82b0c94600c3d15',
          title: 'Using React Native: One Year Later',
          body:
            'When I interviewed for the iOS developer opening at Discord last spring, the tech lead Stanislav told me: React Native is the future. We will use it to build our iOS app from scratch as soon as it becomes public. As a native iOS developer, I strongly doubted using web technologies to build mobile apps because of my previous experiences with tools like PhoneGap. But after learning and using React Native for a while, I am glad we made that decision.',
          created_by: 'cooljmessy',
          belongs_to: 'coding',
          __v: 0
        },
        {
          votes: 5,
          _id: '5aa01a0bd82b0c94600c3d18',
          title: 'An Introduction to JavaScript Object Notation (JSON) in JavaScript and .NET',
          body:
            'When designing an application that will communicate with a remote computer, a data format and exchange protocol must be selected. There are a variety of open, standardized options, and the ideal choice depends on the applications requirements and pre-existing functionality. For example, SOAP-based web services format the data in an XML payload wrapped within a SOAP envelope. While XML works well for many application scenarios, it has some drawbacks that make it less than ideal for others. One such space where XML is often less than ideal is with Ajax-style web applications. Ajax is a technique used for building interactive web applications that provide a snappier user experience through the use of out-of-band, lightweight calls to the web server in lieu of full-page postbacks. These asynchronous calls are initiated on the client using JavaScript and involve formatting data, sending it to a web server, and parsing and working with the returned data. While most browsers can construct, send, and parse XML, JavaScript Object Notation (or JSON) provides a standardized data exchange format that is better-suited for Ajax-style web applications. JSON is an open, text-based data exchange format (see RFC 4627). Like XML, it is human-readable, platform independent, and enjoys a wide availability of implementations. Data formatted according to the JSON standard is lightweight and can be parsed by JavaScript implementations with incredible ease, making it an ideal data exchange format for Ajax web applications. Since it is primarily a data format, JSON is not limited to just Ajax web applications, and can be used in virtually any scenario where applications need to exchange or store structured information as text. This article examines the JSON standard, its relationship to JavaScript, and how it compares to XML. Jayrock, an open-source JSON implementation for .NET, is discussed and examples of creating and parsing JSON messages are provided in JavaScript and C#.',
          created_by: 'weegembump',
          belongs_to: 'coding',
          __v: 0
        },
        {
          votes: 4,
          _id: '5aa01a0ad82b0c94600c3cf8',
          title: 'Who Will Manage Your Club in 2021?',
          body:
            'Managerial changes are too common in the modern day game. Already in the 16/17 season, we have seen 14 managers lose their job from the Premier League to League Two. Swansea’s Francesco Guidolin became the first top division manager to lose his job but already question marks are raised regarding the future of the likes of David Moyes and Mike Phelan.',
          created_by: 'tickle122',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 4,
          _id: '5aa01a0ad82b0c94600c3cfa',
          title: 'History of FC Barcelona',
          body:
            "The history of Futbol Club Barcelona goes from the football club's founding in 1899 and up to current time. FC Barcelona, also known simply as Barcelona and familiarly as Barça, is based in Barcelona, Catalonia, Spain. The team was founded in 1899 by a group of Swiss, English and Spanish footballers led by Joan Gamper. The club played amateur football until 1910 in various regional competitions. In 1910, the club participated in their first of many European competitions, and has since amassed ten UEFA trophies and a sextuple. In 1928, Barcelona co-founded La Liga, the top-tier in Spanish football, along with a string of other clubs. As of 2016, Barcelona has never been relegated from La Liga, a record they share with Athletic Bilbao and arch-rival Real Madrid. The history of Barcelona has often been politically. Though it is a club created and run by foreigners, Barcelona gradually became a club associated with Catalan values. In Spain's transition to autocracy in 1925, Catalonia became increasingly hostile towards the central government in Madrid. The hostility enhanced Barcelona's image as a focal point for Catalonism, and when Francisco Franco banned the use of the Catalan language, the stadium of Barcelona became one of the few places the people could express their dissatisfaction. The Spanish transition to democracy in 1978 has not dampened the club's image of Catalan pride. In the 2000s – a period of sporting success in the club and an increased focus on Catalan players – club officials have openly called for Catalonia to become an independent state.",
          created_by: 'grumpy19',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 4,
          _id: '5aa01a0ad82b0c94600c3d01',
          title: 'Sunday league football',
          body:
            'Sunday league football is a term used in the United Kingdom to describe those association football leagues which play on Sunday, as opposed to the more usual Saturday. These leagues tend to be lower standard amateur competitions, whose players may have less ability or less time to devote to football. The term pub league can also be used, due to the number of public houses that enter teams. Sunday leagues are sanctioned by the local County Football Association. There is no organised promotion or relegation between leagues, unlike in the National League System, which covers the top few levels of amateur football, although many leagues operate several divisions with promotion and relegation between them. However, ambitious Sunday teams may apply to join a Saturday league for a higher standard of football, and from there graduate to the FA-sanctioned leagues.',
          created_by: 'jessjelly',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 4,
          _id: '5aa01a0ad82b0c94600c3d07',
          title: 'A BRIEF HISTORY OF FOOD—NO BIG DEAL',
          body:
            "n 1686, the croissant was invented in Austria. That's a fun fact I'd probably never had known or maybe don't even really need to know, but now I do, thanks to Julia Rothman's Food Anatomy: The Curious Parts & Pieces of Our Edible World. Rothman has an entire series of illustrated Anatomy books, including Nature and Farm, packed with infographics, quirky facts, and maps that you can get lost in for hours—in a fun way, not in a boring textbook way. It makes you wonder why textbooks aren't this fun to read. Can someone look into this? Thanks.",
          created_by: 'happyamy2016',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 4,
          _id: '5aa01a0bd82b0c94600c3d0d',
          title: 'Stone Soup',
          body:
            'The first day I put my family on a Paleolithic diet, I made my kids fried eggs and sausage for breakfast. If they were still hungry, I told them, they could help themselves to more sausage, but they were not allowed to grab a slice of bread, or toast an English muffin, or pour themselves a bowl of cereal. This represented a reversal of the usual strictures, and they were happy to oblige. It was like some weird, unexpected holiday—Passover in July.',
          created_by: 'jessjelly',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 3,
          _id: '5aa01a0ad82b0c94600c3d04',
          title: 'HOW COOKING HAS CHANGED US',
          body:
            'In a cave in South Africa, archaeologists have unearthed the remains of a million-year-old campfire, and discovered tiny bits of animal bones and ash from plants. It’s the oldest evidence of our ancient human ancestors—probably Homo erectus, a species that preceded ours—cooking a meal.',
          created_by: 'tickle122',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 3,
          _id: '5aa01a0bd82b0c94600c3d19',
          title: 'Designing Better JavaScript APIs',
          body:
            'At some point or another, you will find yourself writing JavaScript code that exceeds the couple of lines from a jQuery plugin. Your code will do a whole lot of things; it will (ideally) be used by many people who will approach your code differently. They have different needs, knowledge and expectations.',
          created_by: 'jessjelly',
          belongs_to: 'coding',
          __v: 0
        },
        {
          votes: 2,
          _id: '5aa01a0ad82b0c94600c3cfb',
          title: 'Which current Premier League manager was the best player?',
          body:
            "Premier League managers work with some of the top players in world football - but were they any good in their day? From European Cup and league title winners to one manager who only played at university, there's a diverse range of experience among the top-flight bosses. We've taken a look at the playing achievements and ability of the current Premier League managers and ranked them. Read on to see who ranks where...",
          created_by: 'happyamy2016',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 2,
          _id: '5aa01a0ad82b0c94600c3cfc',
          title: 'The People Tracking Every Touch, Pass And Tackle in the World Cup',
          body:
            'With each click and drag of a mouse, young soccer fanatics are creating the building blocks of the advanced stats that are changing how the sport is played, watched and analyzed. Opta and Prozone are among the companies that have taken soccer stats far beyond goals and saves, into the realm of pass completion percentage, defensive touches, percentage of aerial balls won, tackle percentage and goals scored above expectation. Cameras alone can’t process all these stats. So companies employ people — mostly young, mostly male, most logging matches in their spare time as a second job — to watch matches and document every event. Their work has helped develop stats that capture the value of players who don’t score many goals, but who set them up with pinpoint passing and hustle. Teams use advanced stats to decide which players to buy and put on the pitch. And fans, whether they like it or not, read and hear more numbers than ever before about this sport that for so long bucked the sports-analytics trend.',
          created_by: 'happyamy2016',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 2,
          _id: '5aa01a0ad82b0c94600c3cff',
          title: 'Agility Training Drills For Football Players',
          body:
            'There are so many areas of focus when it comes to football training, from strength training to ensure you can muscle past the opposition to endurance training to help you perform at your best for the 90 minutes of play. However, agility training should never be lost in the mix when planning sessions, as these drills will help you to change direction without losing balance, speed or strength. As a result, your body’s alignment will improve, your reaction speeds lowered and the chance of injury on the pitch reduced. When planning agility training drills for football players, MaxiNutrition believes coaches should look towards cones and ladders. The following guide explains how to use both pieces of equipment effectively:',
          created_by: 'weegembump',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 2,
          _id: '5aa01a0ad82b0c94600c3d03',
          title: 'Sweet potato & butternut squash soup with lemon & garlic toast',
          body:
            'Roast your vegetables in honey before blitzing into this velvety smooth, spiced soup - served with garlicky, zesty ciabatta slices for dipping',
          created_by: 'tickle122',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 2,
          _id: '5aa01a0ad82b0c94600c3d0b',
          title: 'Seafood substitutions are increasing',
          body:
            "'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO. Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled. Although fish fraud is common early in the supply chain, most of it comes at the retail level. In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs. In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper. Especially brazen fish criminals have invented new types of fish entirely. In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species. Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish. Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading.",
          created_by: 'weegembump',
          belongs_to: 'cooking',
          __v: 0
        }
      ];
      const articleId = originalArticles[0]._id;
      const voteType = 'up';
      const actual = collectionVote(originalArticles, articleId, voteType);

      expect(actual).to.not.equal(originalArticles);
    });
    it('increments vote on article when passed single article object', () => {
      const originalArticle = {
        _id: '5aa01a0ad82b0c94600c3d05',
        belongs_to: 'cooking',
        body:
          'Thanksgiving is a foodie’s favorite holiday. Mashed potatoes, cranberry sauce, stuffing, and last but not least, a juicy turkey. Don’t let your meticulous menu fall short of perfection; flavorful cock…',
        created_by: 'grumpy19',
        title: 'Thanksgiving Drinks for Everyone',
        votes: 11
      };
      const articleId = originalArticle._id;
      const voteType = 'up';
      const actual = collectionVote(originalArticle, articleId, voteType);

      expect(actual.votes).to.equal(originalArticle.votes + 1);
    });
    it('decrements vote on article when passed single article object', () => {
      const originalArticle = {
        _id: '5aa01a0ad82b0c94600c3d05',
        belongs_to: 'cooking',
        body:
          'Thanksgiving is a foodie’s favorite holiday. Mashed potatoes, cranberry sauce, stuffing, and last but not least, a juicy turkey. Don’t let your meticulous menu fall short of perfection; flavorful cock…',
        created_by: 'grumpy19',
        title: 'Thanksgiving Drinks for Everyone',
        votes: 11
      };
      const articleId = originalArticle._id;
      const voteType = 'down';
      const actual = collectionVote(originalArticle, articleId, voteType);

      expect(actual.votes).to.equal(originalArticle.votes - 1);
    });
    it('does not mutate state when voting on single article object', () => {
      const originalArticle = {
        _id: '5aa01a0ad82b0c94600c3d05',
        belongs_to: 'cooking',
        body:
          'Thanksgiving is a foodie’s favorite holiday. Mashed potatoes, cranberry sauce, stuffing, and last but not least, a juicy turkey. Don’t let your meticulous menu fall short of perfection; flavorful cock…',
        created_by: 'grumpy19',
        title: 'Thanksgiving Drinks for Everyone',
        votes: 11
      };
      const articleId = originalArticle._id;
      const voteType = 'down';
      const actual = collectionVote(originalArticle, articleId, voteType);

      expect(actual).to.not.equal(originalArticle.votes - 1);
    });
    it('increments vote on single article when passed array of articles', () => {
      const originalArticles = [
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3cf7',
          title: "What does Jose Mourinho's handwriting say about his personality?",
          body:
            "Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United's manager was clearly impressed with the Austrian's performance.",
          created_by: 'tickle122',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3cfd',
          title: 'Who are the most followed clubs and players on Instagram?',
          body:
            "Manchester United are the UK's most popular club on Instagram, with over 14m people following their account for their latest photos and videos. United's total number of followers is over six million more than second-placed Arsenal (8.1m), while Chelsea are third on the list with 7.7m followers, according to data exclusively compiled for Sky Sports. Instagram has a 500m-strong community, with one in three people on the social media site (around 165m) following a sports account.",
          created_by: 'cooljmessy',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3d05',
          title: 'Thanksgiving Drinks for Everyone',
          body:
            'Thanksgiving is a foodie’s favorite holiday. Mashed potatoes, cranberry sauce, stuffing, and last but not least, a juicy turkey. Don’t let your meticulous menu fall short of perfection; flavorful cocktails are just as important as the meal. Here are a few ideas that will fit right into your festivities.',
          created_by: 'grumpy19',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3d0a',
          title: 'Halal food: Keeping pure and true',
          body:
            "CHINA’S cities abound with restaurants and food stalls catering to Muslims as well as to the many other Chinese who relish the distinctive cuisines for which the country’s Muslims are renowned. So popular are kebabs cooked by Muslim Uighurs on the streets of Beijing that the city banned outdoor grills in 2014 in order to reduce smoke, which officials said was exacerbating the capital’s notorious smog (the air today is hardly less noxious). Often such food is claimed to be qing zhen, meaning 'pure and true', or halal, prepared according to traditional Islamic regulations. But who can tell? Last year angry Muslims besieged a halal bakery in Xining, the capital of Qinghai province, after pork sausages were found in the shop’s delivery van. There have been several scandals in recent years involving rat meat or pork being sold as lamb. These have spread Muslim mistrust of domestically produced halal products.",
          created_by: 'cooljmessy',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0bd82b0c94600c3d0c',
          title: 'The Notorious MSG’s Unlikely Formula For Success',
          body:
            "The 'umami' craze has turned a much-maligned and misunderstood food additive into an object of obsession for the world’s most innovative chefs. But secret ingredient monosodium glutamate’s biggest secret may be that there was never anything wrong with it at all.",
          created_by: 'weegembump',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0bd82b0c94600c3d10',
          title: "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
          body:
            'Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.',
          created_by: 'tickle122',
          belongs_to: 'coding',
          __v: 0
        }
      ];
      const articleId = originalArticles[0]._id;
      const voteType = 'up';
      const actual = collectionVote(originalArticles, articleId, voteType);

      expect(actual[0].votes).to.equal(originalArticles[0].votes + 1);
    });
    it('increments vote on single article when passed an array of articles', () => {
      const originalArticles = [
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3cf7',
          title: "What does Jose Mourinho's handwriting say about his personality?",
          body:
            "Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United's manager was clearly impressed with the Austrian's performance.",
          created_by: 'tickle122',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3cfd',
          title: 'Who are the most followed clubs and players on Instagram?',
          body:
            "Manchester United are the UK's most popular club on Instagram, with over 14m people following their account for their latest photos and videos. United's total number of followers is over six million more than second-placed Arsenal (8.1m), while Chelsea are third on the list with 7.7m followers, according to data exclusively compiled for Sky Sports. Instagram has a 500m-strong community, with one in three people on the social media site (around 165m) following a sports account.",
          created_by: 'cooljmessy',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3d05',
          title: 'Thanksgiving Drinks for Everyone',
          body:
            'Thanksgiving is a foodie’s favorite holiday. Mashed potatoes, cranberry sauce, stuffing, and last but not least, a juicy turkey. Don’t let your meticulous menu fall short of perfection; flavorful cocktails are just as important as the meal. Here are a few ideas that will fit right into your festivities.',
          created_by: 'grumpy19',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3d0a',
          title: 'Halal food: Keeping pure and true',
          body:
            "CHINA’S cities abound with restaurants and food stalls catering to Muslims as well as to the many other Chinese who relish the distinctive cuisines for which the country’s Muslims are renowned. So popular are kebabs cooked by Muslim Uighurs on the streets of Beijing that the city banned outdoor grills in 2014 in order to reduce smoke, which officials said was exacerbating the capital’s notorious smog (the air today is hardly less noxious). Often such food is claimed to be qing zhen, meaning 'pure and true', or halal, prepared according to traditional Islamic regulations. But who can tell? Last year angry Muslims besieged a halal bakery in Xining, the capital of Qinghai province, after pork sausages were found in the shop’s delivery van. There have been several scandals in recent years involving rat meat or pork being sold as lamb. These have spread Muslim mistrust of domestically produced halal products.",
          created_by: 'cooljmessy',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0bd82b0c94600c3d0c',
          title: 'The Notorious MSG’s Unlikely Formula For Success',
          body:
            "The 'umami' craze has turned a much-maligned and misunderstood food additive into an object of obsession for the world’s most innovative chefs. But secret ingredient monosodium glutamate’s biggest secret may be that there was never anything wrong with it at all.",
          created_by: 'weegembump',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0bd82b0c94600c3d10',
          title: "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
          body:
            'Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.',
          created_by: 'tickle122',
          belongs_to: 'coding',
          __v: 0
        }
      ];
      const articleId = originalArticles[originalArticles.length - 1]._id;
      const voteType = 'down';
      const actual = collectionVote(originalArticles, articleId, voteType);

      expect(actual[actual.length - 1].votes).to.equal(
        originalArticles[originalArticles.length - 1].votes - 1
      );
    });
    it('increments vote on single comment when passed an array of comments', () => {
      const originalComments = [
        {
          created_at: 1519635587000,
          votes: 10,
          created_by: 'jessjelly',
          _id: '5a9be3733dbab14a18aff475',
          body:
            'Ucuva fal bajonpur ber nijuho fudies lewevuza azigiciw ege vonub tunuab waoza wa. Cij fevgegco podahki koedter fec behepva se war ak maza ohhu wetcu pe. Uteugzet si le lafep rottu mo jegmutben romawgik tabow pesfem nuusva suvgoj ladah tut dipkebaw na. De ru izo dihi vah gofpesuh raibali nomgucgu lef haltecej fikufhu co dida huc eleosi waz mof.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519578287000,
          votes: 10,
          created_by: 'cooljmessy',
          _id: '5a9be3733dbab14a18aff471',
          body:
            'Ze tucusacet bi es ekeam vamo govwired ijgi ego soul epo keb zonuvil co lek. Jalguwi urwo cavvigcot ezajekfu ageze opemog vic rusnivdi po fo gov omhegva vewwi napdod rurebi lasevme ola ozaba. Zew siclego gis ape witfuj je erore ubovef he obepelduh diohu na.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519916867000,
          votes: 9,
          created_by: 'happyamy2016',
          _id: '5a9be3733dbab14a18aff476',
          body:
            'Te gavib ogva cotlebjot cone enu pigevi fedu fik vu it jijew wak rojigte wirgo. Obhoopo kedep fu avo dusir ja fe ceja gac nekuj vi lepzecu do. Gewsudek zompubiw wugep kali ra zo suzamovib ah gelej mahiraol ucupin utpekuf la leb paigdo. Zo ge pehanug afzik nejwotko bedal vugjug alpu netif oribo redaliuc ge or oz ruiceva ki.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519752167000,
          votes: 8,
          created_by: 'cooljmessy',
          _id: '5a9be3733dbab14a18aff473',
          body:
            'Ibufucul ipuccim duvdoc rebguw dalobit cewu ebiamat jecoif dirugow deprutgof mutegud puvvisvu. Jahku irtod ude vejujki la rugu telmak linota nottu geduz rilha wopur ozpa bileza se. Niuban uksof inuohe elgov iwasamu adoweuz sitlel pafbufweg vunobid uda galowa civofi bez vosakkaz.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1520028527000,
          votes: 5,
          created_by: 'jessjelly',
          _id: '5a9be3733dbab14a18aff46f',
          body:
            'Icban avi cidmucu jewaptah wacihgoz ev fordi naje umhirli siz ga aforgop un ciomide focivwa pimfifso wizol gi. Rejoneba gut temekaez vu let vov mirsehu ajuto lo no uhfodeh wofuruwat.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        }
      ];
      const commentId = originalComments[0]._id;
      const voteType = 'up';
      const actual = collectionVote(originalComments, commentId, voteType);

      expect(actual[0].votes).to.equal(originalComments[0].votes + 1);
    });
    it('increments vote on single comment when passed an array of comments', () => {
      const originalComments = [
        {
          created_at: 1519635587000,
          votes: 10,
          created_by: 'jessjelly',
          _id: '5a9be3733dbab14a18aff475',
          body:
            'Ucuva fal bajonpur ber nijuho fudies lewevuza azigiciw ege vonub tunuab waoza wa. Cij fevgegco podahki koedter fec behepva se war ak maza ohhu wetcu pe. Uteugzet si le lafep rottu mo jegmutben romawgik tabow pesfem nuusva suvgoj ladah tut dipkebaw na. De ru izo dihi vah gofpesuh raibali nomgucgu lef haltecej fikufhu co dida huc eleosi waz mof.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519578287000,
          votes: 10,
          created_by: 'cooljmessy',
          _id: '5a9be3733dbab14a18aff471',
          body:
            'Ze tucusacet bi es ekeam vamo govwired ijgi ego soul epo keb zonuvil co lek. Jalguwi urwo cavvigcot ezajekfu ageze opemog vic rusnivdi po fo gov omhegva vewwi napdod rurebi lasevme ola ozaba. Zew siclego gis ape witfuj je erore ubovef he obepelduh diohu na.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519916867000,
          votes: 9,
          created_by: 'happyamy2016',
          _id: '5a9be3733dbab14a18aff476',
          body:
            'Te gavib ogva cotlebjot cone enu pigevi fedu fik vu it jijew wak rojigte wirgo. Obhoopo kedep fu avo dusir ja fe ceja gac nekuj vi lepzecu do. Gewsudek zompubiw wugep kali ra zo suzamovib ah gelej mahiraol ucupin utpekuf la leb paigdo. Zo ge pehanug afzik nejwotko bedal vugjug alpu netif oribo redaliuc ge or oz ruiceva ki.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519752167000,
          votes: 8,
          created_by: 'cooljmessy',
          _id: '5a9be3733dbab14a18aff473',
          body:
            'Ibufucul ipuccim duvdoc rebguw dalobit cewu ebiamat jecoif dirugow deprutgof mutegud puvvisvu. Jahku irtod ude vejujki la rugu telmak linota nottu geduz rilha wopur ozpa bileza se. Niuban uksof inuohe elgov iwasamu adoweuz sitlel pafbufweg vunobid uda galowa civofi bez vosakkaz.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1520028527000,
          votes: 5,
          created_by: 'jessjelly',
          _id: '5a9be3733dbab14a18aff46f',
          body:
            'Icban avi cidmucu jewaptah wacihgoz ev fordi naje umhirli siz ga aforgop un ciomide focivwa pimfifso wizol gi. Rejoneba gut temekaez vu let vov mirsehu ajuto lo no uhfodeh wofuruwat.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        }
      ];
      const commentId = originalComments[4]._id;
      const voteType = 'down';
      const actual = collectionVote(originalComments, commentId, voteType);

      expect(actual[4].votes).to.equal(originalComments[4].votes - 1);
    });
    it("ignores non valid voteTypes and doesn't mutate state", () => {
      const originalArticles = [
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3cf7',
          title: "What does Jose Mourinho's handwriting say about his personality?",
          body:
            "Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United's manager was clearly impressed with the Austrian's performance.",
          created_by: 'tickle122',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3cfd',
          title: 'Who are the most followed clubs and players on Instagram?',
          body:
            "Manchester United are the UK's most popular club on Instagram, with over 14m people following their account for their latest photos and videos. United's total number of followers is over six million more than second-placed Arsenal (8.1m), while Chelsea are third on the list with 7.7m followers, according to data exclusively compiled for Sky Sports. Instagram has a 500m-strong community, with one in three people on the social media site (around 165m) following a sports account.",
          created_by: 'cooljmessy',
          belongs_to: 'football',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3d05',
          title: 'Thanksgiving Drinks for Everyone',
          body:
            'Thanksgiving is a foodie’s favorite holiday. Mashed potatoes, cranberry sauce, stuffing, and last but not least, a juicy turkey. Don’t let your meticulous menu fall short of perfection; flavorful cocktails are just as important as the meal. Here are a few ideas that will fit right into your festivities.',
          created_by: 'grumpy19',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0ad82b0c94600c3d0a',
          title: 'Halal food: Keeping pure and true',
          body:
            "CHINA’S cities abound with restaurants and food stalls catering to Muslims as well as to the many other Chinese who relish the distinctive cuisines for which the country’s Muslims are renowned. So popular are kebabs cooked by Muslim Uighurs on the streets of Beijing that the city banned outdoor grills in 2014 in order to reduce smoke, which officials said was exacerbating the capital’s notorious smog (the air today is hardly less noxious). Often such food is claimed to be qing zhen, meaning 'pure and true', or halal, prepared according to traditional Islamic regulations. But who can tell? Last year angry Muslims besieged a halal bakery in Xining, the capital of Qinghai province, after pork sausages were found in the shop’s delivery van. There have been several scandals in recent years involving rat meat or pork being sold as lamb. These have spread Muslim mistrust of domestically produced halal products.",
          created_by: 'cooljmessy',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0bd82b0c94600c3d0c',
          title: 'The Notorious MSG’s Unlikely Formula For Success',
          body:
            "The 'umami' craze has turned a much-maligned and misunderstood food additive into an object of obsession for the world’s most innovative chefs. But secret ingredient monosodium glutamate’s biggest secret may be that there was never anything wrong with it at all.",
          created_by: 'weegembump',
          belongs_to: 'cooking',
          __v: 0
        },
        {
          votes: 10,
          _id: '5aa01a0bd82b0c94600c3d10',
          title: "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
          body:
            'Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.',
          created_by: 'tickle122',
          belongs_to: 'coding',
          __v: 0
        }
      ];
      const articleId = originalArticles[originalArticles.length - 1]._id;
      const voteType = 'why';
      const actual = collectionVote(originalArticles, articleId, voteType);

      expect(actual).to.not.equal(originalArticles);
      expect(actual[originalArticles.length - 1].votes).to.equal(
        originalArticles[originalArticles.length - 1].votes
      );
    });
  });
  describe('#limitVote', () => {
    it('increments vote and blocks voting up again', () => {
      const originalState = {
        voteChangedBy: 0,
        voteUpDisabled: false,
        voteDownDisabled: false
      };
      const voteType = 'up';
      const actual = limitVote(originalState, voteType);

      expect(actual.voteChangedBy).to.equal(1);
      expect(actual.voteUpDisabled).to.equal(true);
      expect(actual.voteDownDisabled).to.equal(false);
    });
    it('decrements vote and blocks voting down again', () => {
      const originalState = {
        voteChangedBy: 0,
        voteUpDisabled: false,
        voteDownDisabled: false
      };
      const voteType = 'down';
      const actual = limitVote(originalState, voteType);

      expect(actual.voteChangedBy).to.equal(-1);
      expect(actual.voteUpDisabled).to.equal(false);
      expect(actual.voteDownDisabled).to.equal(true);
    });
    it("doesn't mutate state when voting", () => {
      const originalState = {
        voteChangedBy: 0,
        voteUpDisabled: false,
        voteDownDisabled: false
      };
      const voteType = 'up';
      const actual = limitVote(originalState, voteType);

      expect(actual.voteChangedBy).to.equal(1);
      expect(actual.voteUpDisabled).to.equal(true);
      expect(actual.voteDownDisabled).to.equal(false);
      expect(actual).to.not.equal(originalState);
    });
    it("doesn't allow original vote state to be decremented twice in a row", () => {
      const originalState = {
        voteChangedBy: 0,
        voteUpDisabled: false,
        voteDownDisabled: false
      };
      const voteType = 'down';
      let actual = limitVote(originalState, voteType);

      expect(actual.voteChangedBy).to.equal(-1);
      expect(actual.voteUpDisabled).to.equal(false);
      expect(actual.voteDownDisabled).to.equal(true);

      actual = limitVote(actual, voteType);
      expect(actual.voteChangedBy).to.equal(-1);
      expect(actual.voteUpDisabled).to.equal(false);
      expect(actual.voteDownDisabled).to.equal(true);
    });
    it("doesn't allow original vote state to be increased twice in a row", () => {
      const originalState = {
        voteChangedBy: 0,
        voteUpDisabled: false,
        voteDownDisabled: false
      };
      const voteType = 'up';
      let actual = limitVote(originalState, voteType);

      expect(actual.voteChangedBy).to.equal(1);
      expect(actual.voteUpDisabled).to.equal(true);
      expect(actual.voteDownDisabled).to.equal(false);

      actual = limitVote(actual, voteType);
      expect(actual.voteChangedBy).to.equal(1);
      expect(actual.voteUpDisabled).to.equal(true);
      expect(actual.voteDownDisabled).to.equal(false);
    });
    it('Allows up vote followed by two down and sets correct disabled states', () => {
      const originalState = {
        voteChangedBy: 0,
        voteUpDisabled: false,
        voteDownDisabled: false
      };
      let voteType = 'up';
      let actual = limitVote(originalState, voteType);

      expect(actual.voteChangedBy).to.equal(1);
      expect(actual.voteUpDisabled).to.equal(true);
      expect(actual.voteDownDisabled).to.equal(false);

      voteType = 'down';
      actual = limitVote(actual, voteType);
      expect(actual.voteChangedBy).to.equal(0);
      expect(actual.voteUpDisabled).to.equal(false);
      expect(actual.voteDownDisabled).to.equal(false);

      actual = limitVote(actual, voteType);
      expect(actual.voteChangedBy).to.equal(-1);
      expect(actual.voteUpDisabled).to.equal(false);
      expect(actual.voteDownDisabled).to.equal(true);

      actual = limitVote(actual, voteType);
      expect(actual.voteChangedBy).to.equal(-1);
      expect(actual.voteUpDisabled).to.equal(false);
      expect(actual.voteDownDisabled).to.equal(true);
    });
    it('Allows down vote followed by two up and sets correct disabled states', () => {
      const originalState = {
        voteChangedBy: 0,
        voteUpDisabled: false,
        voteDownDisabled: false
      };
      let voteType = 'down';
      let actual = limitVote(originalState, voteType);

      expect(actual.voteChangedBy).to.equal(-1);
      expect(actual.voteUpDisabled).to.equal(false);
      expect(actual.voteDownDisabled).to.equal(true);

      voteType = 'up';
      actual = limitVote(actual, voteType);
      expect(actual.voteChangedBy).to.equal(0);
      expect(actual.voteUpDisabled).to.equal(false);
      expect(actual.voteDownDisabled).to.equal(false);

      actual = limitVote(actual, voteType);
      expect(actual.voteChangedBy).to.equal(1);
      expect(actual.voteUpDisabled).to.equal(true);
      expect(actual.voteDownDisabled).to.equal(false);

      actual = limitVote(actual, voteType);
      expect(actual.voteChangedBy).to.equal(1);
      expect(actual.voteUpDisabled).to.equal(true);
      expect(actual.voteDownDisabled).to.equal(false);
    });
  });
  describe('#controlledFormInput', () => {
    it('Returns new version of state with new input', () => {
      let state = { comment: '' };
      let formField = 'comment';
      let input = 'A';
      let actual = controlledFormInput(state, formField, input);

      expect(actual).to.not.equal(state);
      expect(actual.comment).to.equal(input);

      state = { comment: 'A' };
      formField = 'comment';
      input = 'Aa';
      actual = controlledFormInput(state, formField, input);

      expect(actual).to.not.equal(state);
      expect(actual.comment).to.equal(input);

      state = { comment: 'Aa' };
      formField = 'comment';
      input = 'Aa1';
      actual = controlledFormInput(state, formField, input);

      expect(actual).to.not.equal(state);
      expect(actual.comment).to.equal(input);
    });
    it('returns original state if passed invalid prop', () => {
      const state = { comment: 'A' };
      const formField = 'comments';
      const input = 'Aa';
      const actual = controlledFormInput(state, formField, input);

      expect(actual).to.equal(state);
      expect(actual.comment).to.equal(state.comment);
    });
  });
  describe('#deleteComment', () => {
    it('Remove commentId passed to it', () => {
      const originalComments = [
        {
          created_at: 1519635587000,
          votes: 10,
          created_by: 'jessjelly',
          _id: '5a9be3733dbab14a18aff475',
          body:
            'Ucuva fal bajonpur ber nijuho fudies lewevuza azigiciw ege vonub tunuab waoza wa. Cij fevgegco podahki koedter fec behepva se war ak maza ohhu wetcu pe. Uteugzet si le lafep rottu mo jegmutben romawgik tabow pesfem nuusva suvgoj ladah tut dipkebaw na. De ru izo dihi vah gofpesuh raibali nomgucgu lef haltecej fikufhu co dida huc eleosi waz mof.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519578287000,
          votes: 10,
          created_by: 'cooljmessy',
          _id: '5a9be3733dbab14a18aff471',
          body:
            'Ze tucusacet bi es ekeam vamo govwired ijgi ego soul epo keb zonuvil co lek. Jalguwi urwo cavvigcot ezajekfu ageze opemog vic rusnivdi po fo gov omhegva vewwi napdod rurebi lasevme ola ozaba. Zew siclego gis ape witfuj je erore ubovef he obepelduh diohu na.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519916867000,
          votes: 9,
          created_by: 'happyamy2016',
          _id: '5a9be3733dbab14a18aff476',
          body:
            'Te gavib ogva cotlebjot cone enu pigevi fedu fik vu it jijew wak rojigte wirgo. Obhoopo kedep fu avo dusir ja fe ceja gac nekuj vi lepzecu do. Gewsudek zompubiw wugep kali ra zo suzamovib ah gelej mahiraol ucupin utpekuf la leb paigdo. Zo ge pehanug afzik nejwotko bedal vugjug alpu netif oribo redaliuc ge or oz ruiceva ki.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519752167000,
          votes: 8,
          created_by: 'cooljmessy',
          _id: '5a9be3733dbab14a18aff473',
          body:
            'Ibufucul ipuccim duvdoc rebguw dalobit cewu ebiamat jecoif dirugow deprutgof mutegud puvvisvu. Jahku irtod ude vejujki la rugu telmak linota nottu geduz rilha wopur ozpa bileza se. Niuban uksof inuohe elgov iwasamu adoweuz sitlel pafbufweg vunobid uda galowa civofi bez vosakkaz.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1520028527000,
          votes: 5,
          created_by: 'jessjelly',
          _id: '5a9be3733dbab14a18aff46f',
          body:
            'Icban avi cidmucu jewaptah wacihgoz ev fordi naje umhirli siz ga aforgop un ciomide focivwa pimfifso wizol gi. Rejoneba gut temekaez vu let vov mirsehu ajuto lo no uhfodeh wofuruwat.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        }
      ];
      const commentId = originalComments[0]._id;
      const actual = removeCommentFromState(originalComments, commentId);

      expect(actual.length).to.equal(originalComments.length - 1);
      expect(actual[0]._id).to.not.equal(commentId);
      expect(actual).to.not.have.deep.members(originalComments);
    });
    it('Does not mutate state', () => {
      const originalComments = [
        {
          created_at: 1519635587000,
          votes: 10,
          created_by: 'jessjelly',
          _id: '5a9be3733dbab14a18aff475',
          body:
            'Ucuva fal bajonpur ber nijuho fudies lewevuza azigiciw ege vonub tunuab waoza wa. Cij fevgegco podahki koedter fec behepva se war ak maza ohhu wetcu pe. Uteugzet si le lafep rottu mo jegmutben romawgik tabow pesfem nuusva suvgoj ladah tut dipkebaw na. De ru izo dihi vah gofpesuh raibali nomgucgu lef haltecej fikufhu co dida huc eleosi waz mof.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519578287000,
          votes: 10,
          created_by: 'cooljmessy',
          _id: '5a9be3733dbab14a18aff471',
          body:
            'Ze tucusacet bi es ekeam vamo govwired ijgi ego soul epo keb zonuvil co lek. Jalguwi urwo cavvigcot ezajekfu ageze opemog vic rusnivdi po fo gov omhegva vewwi napdod rurebi lasevme ola ozaba. Zew siclego gis ape witfuj je erore ubovef he obepelduh diohu na.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519916867000,
          votes: 9,
          created_by: 'happyamy2016',
          _id: '5a9be3733dbab14a18aff476',
          body:
            'Te gavib ogva cotlebjot cone enu pigevi fedu fik vu it jijew wak rojigte wirgo. Obhoopo kedep fu avo dusir ja fe ceja gac nekuj vi lepzecu do. Gewsudek zompubiw wugep kali ra zo suzamovib ah gelej mahiraol ucupin utpekuf la leb paigdo. Zo ge pehanug afzik nejwotko bedal vugjug alpu netif oribo redaliuc ge or oz ruiceva ki.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519752167000,
          votes: 8,
          created_by: 'cooljmessy',
          _id: '5a9be3733dbab14a18aff473',
          body:
            'Ibufucul ipuccim duvdoc rebguw dalobit cewu ebiamat jecoif dirugow deprutgof mutegud puvvisvu. Jahku irtod ude vejujki la rugu telmak linota nottu geduz rilha wopur ozpa bileza se. Niuban uksof inuohe elgov iwasamu adoweuz sitlel pafbufweg vunobid uda galowa civofi bez vosakkaz.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1520028527000,
          votes: 5,
          created_by: 'jessjelly',
          _id: '5a9be3733dbab14a18aff46f',
          body:
            'Icban avi cidmucu jewaptah wacihgoz ev fordi naje umhirli siz ga aforgop un ciomide focivwa pimfifso wizol gi. Rejoneba gut temekaez vu let vov mirsehu ajuto lo no uhfodeh wofuruwat.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        }
      ];
      const commentId = originalComments[0]._id;
      const actual = removeCommentFromState(originalComments, commentId);

      expect(actual).to.not.equal(originalComments);
      expect(actual.length).to.equal(originalComments.length - 1);
      expect(actual).to.not.have.deep.members(originalComments);
    });
    it('Returns copy of original array if invalid commentId passed to it', () => {
      const originalComments = [
        {
          created_at: 1519635587000,
          votes: 10,
          created_by: 'jessjelly',
          _id: '5a9be3733dbab14a18aff475',
          body:
            'Ucuva fal bajonpur ber nijuho fudies lewevuza azigiciw ege vonub tunuab waoza wa. Cij fevgegco podahki koedter fec behepva se war ak maza ohhu wetcu pe. Uteugzet si le lafep rottu mo jegmutben romawgik tabow pesfem nuusva suvgoj ladah tut dipkebaw na. De ru izo dihi vah gofpesuh raibali nomgucgu lef haltecej fikufhu co dida huc eleosi waz mof.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519578287000,
          votes: 10,
          created_by: 'cooljmessy',
          _id: '5a9be3733dbab14a18aff471',
          body:
            'Ze tucusacet bi es ekeam vamo govwired ijgi ego soul epo keb zonuvil co lek. Jalguwi urwo cavvigcot ezajekfu ageze opemog vic rusnivdi po fo gov omhegva vewwi napdod rurebi lasevme ola ozaba. Zew siclego gis ape witfuj je erore ubovef he obepelduh diohu na.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519916867000,
          votes: 9,
          created_by: 'happyamy2016',
          _id: '5a9be3733dbab14a18aff476',
          body:
            'Te gavib ogva cotlebjot cone enu pigevi fedu fik vu it jijew wak rojigte wirgo. Obhoopo kedep fu avo dusir ja fe ceja gac nekuj vi lepzecu do. Gewsudek zompubiw wugep kali ra zo suzamovib ah gelej mahiraol ucupin utpekuf la leb paigdo. Zo ge pehanug afzik nejwotko bedal vugjug alpu netif oribo redaliuc ge or oz ruiceva ki.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1519752167000,
          votes: 8,
          created_by: 'cooljmessy',
          _id: '5a9be3733dbab14a18aff473',
          body:
            'Ibufucul ipuccim duvdoc rebguw dalobit cewu ebiamat jecoif dirugow deprutgof mutegud puvvisvu. Jahku irtod ude vejujki la rugu telmak linota nottu geduz rilha wopur ozpa bileza se. Niuban uksof inuohe elgov iwasamu adoweuz sitlel pafbufweg vunobid uda galowa civofi bez vosakkaz.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        },
        {
          created_at: 1520028527000,
          votes: 5,
          created_by: 'jessjelly',
          _id: '5a9be3733dbab14a18aff46f',
          body:
            'Icban avi cidmucu jewaptah wacihgoz ev fordi naje umhirli siz ga aforgop un ciomide focivwa pimfifso wizol gi. Rejoneba gut temekaez vu let vov mirsehu ajuto lo no uhfodeh wofuruwat.',
          belongs_to: '5a9be3733dbab14a18aff42c',
          __v: 0
        }
      ];
      const commentId = 'fakeid1';
      const actual = removeCommentFromState(originalComments, commentId);

      expect(actual.length).to.equal(originalComments.length);
      expect(actual).to.have.deep.members(originalComments);
    });
  });
});
