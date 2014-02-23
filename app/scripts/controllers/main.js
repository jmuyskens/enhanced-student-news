'use strict';

angular.module('enhancedStudentNewsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.news = [
        {
            title: "Rangeela 2014: Unveiled",
            author: "Esther Kwak",
            body: "Come join us in celebrating diversity through this colorful showcase of dances, songs, and skits from around the world! Buy your tickets NOW!"
        },
        {
            title: "Expressions Poetry Jam",
            author: "Multicultural",
            body: "The Multicultural Student Development Office is partnering with Weekend Programming to bring to you Expressions Poetry Jam on Saturday, March 8th at 8:00pm in the Chapel. We want you to come and feel to express yourself in any form of art you would like. We are currently looking for performers to participate. If you do poetry, singing, instrumental performances, we want you! \
            Sign up by clicking on the link below and fill out the form. We can't wait to see you there!! "
        },
        {
            title: "Artemis LAN and free pizza!",
            author: "Grant Ebeling",
            body: "Come join games of Abstraction for Artemis and free pizza this \
            Saturday from 7pm on! \
            Work alongside 5 crewmembers as you navigate the challenges of space! \
            Eat pizza! Toggle the klaxxon to annoy the captain! Use unnecessary exclamation marks! \
            Come join us in the ULab, SB 354."
        },
        {
            title: "The National and The Head and the Heart",
            author: "Gregory Veltman",
            body: "Both concerts with The National and The Head and the Heart are on pace to sell out by the time of the show. Don't delay and potentially miss out, get your tickets soon. \
            \
            Tickets are only $15 with a Calvin ID. "
        },
        {
            title: "Young Life Calvin College Spring Break Trip",
            author: "Scott Burden",
            body: "Still don't have spring break plans? \
            \
            There are still spots open for our Young Life Calvin College Spring Break Trip to Cocoa Beach, FL! Join us and 35 other Calvin College students in Cocoa Beach, FL for spring break 2014. We will have\
            nightly YL clubs and small groups where we grow closer to each other\
            and our God and we will have ample free time to explore the beaches\
            and get our tan on!\
            \
            The Cost for the trip is $525 and that includes transportation, housing, activities, and food while down there.\
            \
            We will be exploring Cocoa Beach, Ron Jon Surf Shop, Downtown Disney and even attending an Orlando Magic basketball game. All this and more\
        is covered in the cost of the trip!\
            \
            *You DO NOT have to be a YL Leader to go on this trip, all Calvin students are welcome, so tell your friends!!*\
        \
        Fill out this form for more information! http://goo.gl/VnyH4Q\
        "
        },
        {
            title: "Expressions Poetry Jam",
            author: "Multicultural",
            body: "The Multicultural Student Development Office is partnering with Weekend Programming to bring to you Expressions Poetry Jam on Saturday, March 8th at 8:00pm in the Chapel. We want you to come and feel to express yourself in any form of art you would like. We are currently looking for performers to participate. If you do poetry, singing, instrumental performances, we want you! \
            Sign up by clicking on the link below and fill out the form. We can't wait to see you there!! "
        },
        {
            title: "Artemis LAN and free pizza!",
            author: "Grant Ebeling",
            body: "Come join games of Abstraction for Artemis and free pizza this \
            Saturday from 7pm on! \
            Work alongside 5 crewmembers as you navigate the challenges of space! \
            Eat pizza! Toggle the klaxxon to annoy the captain! Use unnecessary exclamation marks! \
            Come join us in the ULab, SB 354."
        },
        {
            title: "The National and The Head and the Heart",
            author: "Gregory Veltman",
            body: "Both concerts with The National and The Head and the Heart are on pace to sell out by the time of the show. Don't delay and potentially miss out, get your tickets soon. \
            \
            Tickets are only $15 with a Calvin ID. "
        },
        {
            title: "Rangeela 2014: Unveiled",
            author: "Esther Kwak",
            body: "Come join us in celebrating diversity through this colorful showcase of dances, songs, and skits from around the world! Buy your tickets NOW!"
        },
        {
            title: "Expressions Poetry Jam",
            author: "Multicultural",
            body: "The Multicultural Student Development Office is partnering with Weekend Programming to bring to you Expressions Poetry Jam on Saturday, March 8th at 8:00pm in the Chapel. We want you to come and feel to express yourself in any form of art you would like. We are currently looking for performers to participate. If you do poetry, singing, instrumental performances, we want you! \
            Sign up by clicking on the link below and fill out the form. We can't wait to see you there!! "
        },
        {
            title: "Artemis LAN and free pizza!",
            author: "Grant Ebeling",
            body: "Come join games of Abstraction for Artemis and free pizza this \
            Saturday from 7pm on! \
            Work alongside 5 crewmembers as you navigate the challenges of space! \
            Eat pizza! Toggle the klaxxon to annoy the captain! Use unnecessary exclamation marks! \
            Come join us in the ULab, SB 354."
        },
        {
            title: "The National and The Head and the Heart",
            author: "Gregory Veltman",
            body: "Both concerts with The National and The Head and the Heart are on pace to sell out by the time of the show. Don't delay and potentially miss out, get your tickets soon. \
            \
            Tickets are only $15 with a Calvin ID. "
        },
        {
            title: "Young Life Calvin College Spring Break Trip",
            author: "Scott Burden",
            body: "Still don't have spring break plans? \
            \
            There are still spots open for our Young Life Calvin College Spring Break Trip to Cocoa Beach, FL! Join us and 35 other Calvin College students in Cocoa Beach, FL for spring break 2014. We will have\
            nightly YL clubs and small groups where we grow closer to each other\
            and our God and we will have ample free time to explore the beaches\
            and get our tan on!\
            \
            The Cost for the trip is $525 and that includes transportation, housing, activities, and food while down there.\
            \
            We will be exploring Cocoa Beach, Ron Jon Surf Shop, Downtown Disney and even attending an Orlando Magic basketball game. All this and more\
        is covered in the cost of the trip!\
            \
            *You DO NOT have to be a YL Leader to go on this trip, all Calvin students are welcome, so tell your friends!!*\
        \
        Fill out this form for more information! http://goo.gl/VnyH4Q\
        "
        },
        {
            title: "Expressions Poetry Jam",
            author: "Multicultural",
            body: "The Multicultural Student Development Office is partnering with Weekend Programming to bring to you Expressions Poetry Jam on Saturday, March 8th at 8:00pm in the Chapel. We want you to come and feel to express yourself in any form of art you would like. We are currently looking for performers to participate. If you do poetry, singing, instrumental performances, we want you! \
            Sign up by clicking on the link below and fill out the form. We can't wait to see you there!! "
        },
        {
            title: "Artemis LAN and free pizza!",
            author: "Grant Ebeling",
            body: "Come join games of Abstraction for Artemis and free pizza this \
            Saturday from 7pm on! \
            Work alongside 5 crewmembers as you navigate the challenges of space! \
            Eat pizza! Toggle the klaxxon to annoy the captain! Use unnecessary exclamation marks! \
            Come join us in the ULab, SB 354."
        },
        {
            title: "The National and The Head and the Heart",
            author: "Gregory Veltman",
            body: "Both concerts with The National and The Head and the Heart are on pace to sell out by the time of the show. Don't delay and potentially miss out, get your tickets soon. \
            \
            Tickets are only $15 with a Calvin ID. "
        },
        {
            title: "Rangeela 2014: Unveiled",
            author: "Esther Kwak",
            body: "Come join us in celebrating diversity through this colorful showcase of dances, songs, and skits from around the world! Buy your tickets NOW!"
        },
        {
            title: "Expressions Poetry Jam",
            author: "Multicultural",
            body: "The Multicultural Student Development Office is partnering with Weekend Programming to bring to you Expressions Poetry Jam on Saturday, March 8th at 8:00pm in the Chapel. We want you to come and feel to express yourself in any form of art you would like. We are currently looking for performers to participate. If you do poetry, singing, instrumental performances, we want you! \
            Sign up by clicking on the link below and fill out the form. We can't wait to see you there!! "
        },
        {
            title: "Artemis LAN and free pizza!",
            author: "Grant Ebeling",
            body: "Come join games of Abstraction for Artemis and free pizza this \
            Saturday from 7pm on! \
            Work alongside 5 crewmembers as you navigate the challenges of space! \
            Eat pizza! Toggle the klaxxon to annoy the captain! Use unnecessary exclamation marks! \
            Come join us in the ULab, SB 354."
        },
        {
            title: "The National and The Head and the Heart",
            author: "Gregory Veltman",
            body: "Both concerts with The National and The Head and the Heart are on pace to sell out by the time of the show. Don't delay and potentially miss out, get your tickets soon. \
            \
            Tickets are only $15 with a Calvin ID. "
        },
        {
            title: "Young Life Calvin College Spring Break Trip",
            author: "Scott Burden",
            body: "Still don't have spring break plans? \
            \
            There are still spots open for our Young Life Calvin College Spring Break Trip to Cocoa Beach, FL! Join us and 35 other Calvin College students in Cocoa Beach, FL for spring break 2014. We will have\
            nightly YL clubs and small groups where we grow closer to each other\
            and our God and we will have ample free time to explore the beaches\
            and get our tan on!\
            \
            The Cost for the trip is $525 and that includes transportation, housing, activities, and food while down there.\
            \
            We will be exploring Cocoa Beach, Ron Jon Surf Shop, Downtown Disney and even attending an Orlando Magic basketball game. All this and more\
        is covered in the cost of the trip!\
            \
            *You DO NOT have to be a YL Leader to go on this trip, all Calvin students are welcome, so tell your friends!!*\
        \
        Fill out this form for more information! http://goo.gl/VnyH4Q\
        "
        },
        {
            title: "Expressions Poetry Jam",
            author: "Multicultural",
            body: "The Multicultural Student Development Office is partnering with Weekend Programming to bring to you Expressions Poetry Jam on Saturday, March 8th at 8:00pm in the Chapel. We want you to come and feel to express yourself in any form of art you would like. We are currently looking for performers to participate. If you do poetry, singing, instrumental performances, we want you! \
            Sign up by clicking on the link below and fill out the form. We can't wait to see you there!! "
        },
        {
            title: "Artemis LAN and free pizza!",
            author: "Grant Ebeling",
            body: "Come join games of Abstraction for Artemis and free pizza this \
            Saturday from 7pm on! \
            Work alongside 5 crewmembers as you navigate the challenges of space! \
            Eat pizza! Toggle the klaxxon to annoy the captain! Use unnecessary exclamation marks! \
            Come join us in the ULab, SB 354."
        },
        {
            title: "The National and The Head and the Heart",
            author: "Gregory Veltman",
            body: "Both concerts with The National and The Head and the Heart are on pace to sell out by the time of the show. Don't delay and potentially miss out, get your tickets soon. \
            \
            Tickets are only $15 with a Calvin ID. "
        }
    ];
  });
