import React, { useState } from 'react'
import { Img, Box, Body } from '../ListCheckoutStyles';

export default function EventsCheckout() {
    const [events, setEvents] = useState(data);

    const handleChange = (e) => {
        setEvents(() => data.filter((event) => event.name.includes(e.target.value)));
    }

    return (
        <>
        <h3
            style={{
                fontSize: 24,
                fontStyle: 'bold'
            }}
        >Events in San Francisco during your stay...</h3>
        <div>
            <input
                placeholder='Search for events'
                onChange={(e) => {
                    handleChange(e)
                }}
            />
            <div>
                {events.map((event) => (
                    <Box>
                            <Img
                                alt='placeholder'
                                src={event.image.url}
                                style={{
                                    width: 100,
                                    height: 100,
                                }}
                            />
                            <Body>
                                <h4>{event.name}</h4>
                                <p>{event.date}, {event.time}</p>
                                {event.priceMin === event.priceMax ? (
                                    <p>Price: ${event.priceMax}</p>
                                ) : (<p>Price: ${event.priceMin} - ${event.priceMax}</p>)}
                                <p>{event.venue.name}</p>
                                <p>{event.classifications[0].segment.name}</p>
                            </Body>
                    </Box>
                ))}
            </div>
        </div>
        </>
    )
}

var data = [
    {
        "id": "G5e0Zpc7iUKZI",
        "name": "AK: Fate Loves The Fearless Tour",
        "url": "https://www.ticketweb.com/event/ak-fate-loves-the-fearless-brick-and-mortar-music-hall-tickets/11137325?REFERRAL_ID=tmfeed",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/2c9/7a648164-4707-4c86-baba-5bad764542c9_954861_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
        },
        "date": "2021-10-17",
        "time": "18:30:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Brick & Mortar Music Hall",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "1710 Mission Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAv1",
                    "name": "Hip-Hop/Rap"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vaa1",
                    "name": "French Rap"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18b3Blu1Vt6OZvuzNL",
        "name": "Gogh with Lifeway Kefir Immersive Yoga",
        "url": "https://www.universe.com/events/gogh-with-lifeway-kefir-immersive-yoga-tickets-GQ7XS9?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "09:30:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytrL",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "11:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytrO",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "12:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytr-",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "13:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdkfAb",
        "name": "Jesus Christ Superstar",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdkfAb",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/505/538e2df1-7ab0-41ed-8166-b861024f1505_185121_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "13:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Golden Gate Theater",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "1 Taylor St."
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAve",
                    "name": "Musical"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytrx",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "14:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytrN",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "15:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytr0",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "16:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytrP",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "17:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZ4VuXNeek",
        "name": "Dan + Shay The (Arena) Tour",
        "url": "https://www.ticketmaster.com/dan-shay-the-arena-tour-san-francisco-california-10-20-2021/event/1C0057437E8C2086",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/d3f/1438af54-d4e3-41c3-9615-61237dfe5d3f_1433081_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "19:00:00",
        "priceMin": 20,
        "priceMax": 79.5,
        "venue": {
            "name": "Chase Center",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94158",
            "streetAddress": "300 16th Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAv6",
                    "name": "Country"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAFa",
                    "name": "Country"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdkfA_",
        "name": "Jesus Christ Superstar",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdkfA_",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/505/538e2df1-7ab0-41ed-8166-b861024f1505_185121_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "19:30:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Golden Gate Theater",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "1 Taylor St."
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAve",
                    "name": "Musical"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpRSlYJ5i",
        "name": "Talkies: Live Comedy and Short Films",
        "url": "https://concerts.livenation.com/talkies-live-comedy-and-short-films-san-francisco-california-10-20-2021/event/1C005AFCEBC262EC",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": true
        },
        "date": "2021-10-20",
        "time": "20:00:00",
        "priceMin": 18,
        "priceMax": 18,
        "venue": {
            "name": "Cobb's Comedy Club",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94133",
            "streetAddress": "915 Columbus Avenue "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpsLS1phT",
        "name": "Sheng Wang",
        "url": "https://concerts.livenation.com/sheng-wang-san-francisco-california-10-20-2021/event/1C005B17F32966FF",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/dec/d36b1e44-e6ea-4379-bc8e-29003437edec_1290391_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "20:00:00",
        "priceMin": 27,
        "priceMax": 27,
        "venue": {
            "name": "Punch Line Comedy Club - San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94111",
            "streetAddress": "444 Battery Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdFKf3",
        "name": "Christone Ingram",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdFKf3",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/b2a/6973914e-e190-4ed4-8eed-1506b0879b2a_1477841_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
        },
        "date": "2021-10-20",
        "time": "20:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "The Regency Ballroom",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94109",
            "streetAddress": "1290 Sutter Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvl",
                    "name": "Other"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vk1I",
                    "name": "Other"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AoGeJA",
        "name": "BratPack",
        "url": "https://www.ticketweb.com/event/bratpack-feinsteins-at-the-nikko-tickets/11302985",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": true
        },
        "date": "2021-10-20",
        "time": "20:00:00",
        "priceMin": 79,
        "priceMax": 94,
        "venue": {
            "name": "Feinstein's at The Nikko",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "222 Mason Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAev",
                    "name": "Pop"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkEI",
                    "name": "New Wave"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AouZC4",
        "name": "ANIK KHAN, AJALA, YARIN GLAM",
        "url": "https://www.ticketweb.com/event/anik-khan-ajala-yarin-glam-brick-and-mortar-music-hall-tickets/11340395",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": true
        },
        "date": "2021-10-20",
        "time": "21:00:00",
        "priceMin": 17,
        "priceMax": 50,
        "venue": {
            "name": "Brick and Mortar Music Hall",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "1710 Mission Street "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAv1",
                    "name": "Hip-Hop/Rap"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkdA",
                    "name": "Urban"
                },
                "family": false
            },
            {
                "primary": false,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAv1",
                    "name": "Hip-Hop/Rap"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkvl",
                    "name": "Hip-Hop/Rap"
                },
                "family": false
            },
            {
                "primary": false,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkne",
                    "name": "Neo-Soul"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18b3Blu1Vt6OZvuzNO",
        "name": "Gogh with Lifeway Kefir Immersive Yoga",
        "url": "https://www.universe.com/events/gogh-with-lifeway-kefir-immersive-yoga-tickets-GQ7XS9?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "09:30:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytrJ",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "11:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytrE",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "12:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytrI",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "13:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytrt",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "14:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytrn",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "15:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytrl",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "16:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytri",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "17:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZps10yKRs",
        "name": "Golden State Warriors vs. LA Clippers",
        "url": "https://www.ticketmaster.com/golden-state-warriors-vs-la-clippers-san-francisco-california-10-21-2021/event/1C005B12A4E53BF1",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "19:00:00",
        "priceMin": 90,
        "priceMax": 1350,
        "venue": {
            "name": "Chase Center",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94158",
            "streetAddress": "300 16th Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nE",
                    "name": "Sports"
                },
                "genre": {
                    "id": "KnvZfZ7vAde",
                    "name": "Basketball"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFJA",
                    "name": "NBA"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7l1",
                    "name": "Group"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA7d",
                    "name": "Team"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdaP8k",
        "name": "San Francisco Symphony",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdaP8k",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/c/f7b/ef64d601-8740-43cd-86ea-ed9b392e4f7b_105961_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": true
        },
        "date": "2021-10-21",
        "time": "19:30:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Davies Symphony Hall",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "201 Van Ness Ave."
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvl",
                    "name": "Other"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vk1I",
                    "name": "Other"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdkfAO",
        "name": "Jesus Christ Superstar",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdkfAO",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/505/538e2df1-7ab0-41ed-8166-b861024f1505_185121_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "19:30:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Golden Gate Theater",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "1 Taylor St."
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAve",
                    "name": "Musical"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpS9xKIOw",
        "name": "Andrew Yang: Forward Tour",
        "url": "https://concerts.livenation.com/andrew-yang-forward-tour-san-francisco-california-10-21-2021/event/1C005B35E24E8832",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/ecd/3e626e0c-673e-4608-9e65-50095f632ecd_1514031_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "20:00:00",
        "priceMin": 50,
        "priceMax": 50,
        "venue": {
            "name": "Cobb's Comedy Club",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94133",
            "streetAddress": "915 Columbus Avenue "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7n1",
                    "name": "Miscellaneous"
                },
                "genre": {
                    "id": "KnvZfZ7vAJe",
                    "name": "Lecture/Seminar"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vaat",
                    "name": "Lecture/Seminar"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vAkt",
                    "name": "Lecture/Seminar"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpiIY2A78",
        "name": "Rod Wave: Soulfly Tour Presented By APE, Rolling Loud And Live Nation",
        "url": "https://www.ticketmaster.com/rod-wave-soulfly-tour-presented-by-san-francisco-california-10-21-2021/event/1C005ACA303C5110",
        "image": {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/ead/219a25b0-522f-4e91-9795-6a57a1b99ead_1454521_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "20:00:00",
        "priceMin": 49.5,
        "priceMax": 49.5,
        "venue": {
            "name": "Bill Graham Civic Auditorium",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "99 Grove Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAv1",
                    "name": "Hip-Hop/Rap"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vaa1",
                    "name": "French Rap"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpsLS1Uje",
        "name": "Sheng Wang",
        "url": "https://concerts.livenation.com/sheng-wang-san-francisco-california-10-21-2021/event/1C005B17F32B6702",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/dec/d36b1e44-e6ea-4379-bc8e-29003437edec_1290391_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "20:00:00",
        "priceMin": 27,
        "priceMax": 27,
        "venue": {
            "name": "Punch Line Comedy Club - San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94111",
            "streetAddress": "444 Battery Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpsS8f1iX",
        "name": "Trejo/Sosa/Fernandez: Stand-Up Comedy en Espanol",
        "url": "https://concerts.livenation.com/trejososafernandez-standup-comedy-en-espanol-san-francisco-california-10-21-2021/event/1C005B1CD050AB3E",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/009/88541995-00a8-4e65-881b-f78f9402c009_1481741_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "20:00:00",
        "priceMin": 25,
        "priceMax": 25,
        "venue": {
            "name": "Cobb's Comedy Club",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94133",
            "streetAddress": "915 Columbus Avenue "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpwlFkPg6",
        "name": "It Wasn't Funny Then, But It's Funny Now",
        "url": "https://concerts.livenation.com/it-wasnt-funny-then-but-its-san-francisco-california-10-21-2021/event/1C005B2AC81A5D47",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/886/deff3c25-256e-4132-98b5-a2b6b3ad4886_70961_RECOMENDATION_16_9.jpg",
            "width": 100,
            "height": 56,
            "fallback": false
        },
        "date": "2021-10-21",
        "time": "20:00:00",
        "priceMin": 18,
        "priceMax": 18,
        "venue": {
            "name": "Cobb's Comedy Club",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94133",
            "streetAddress": "915 Columbus Avenue "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AoGe0A",
        "name": "BratPack",
        "url": "https://www.ticketweb.com/event/bratpack-feinsteins-at-the-nikko-tickets/11302905",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": true
        },
        "date": "2021-10-21",
        "time": "20:00:00",
        "priceMin": 79,
        "priceMax": 94,
        "venue": {
            "name": "Feinstein's at The Nikko",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "222 Mason Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAev",
                    "name": "Pop"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkEI",
                    "name": "New Wave"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AoGpG4",
        "name": "High & Mighty Podcast With Jon Gabrus",
        "url": "https://www.ticketweb.com/event/high-mighty-podcast-with-the-independent-tickets/11316315",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/f51/ee785ed6-f806-4195-98f4-69f67e09df51_106201_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": true
        },
        "date": "2021-10-21",
        "time": "20:00:00",
        "priceMin": 25,
        "priceMax": 25,
        "venue": {
            "name": "The Independent",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94117",
            "streetAddress": "628 Divisadero St"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nl",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5e0Zpczw_oow",
        "name": "Francisco Martin",
        "url": "https://www.ticketweb.com/event/francisco-martin-brick-and-mortar-music-hall-tickets/11166055?REFERRAL_ID=tmfeed",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": true
        },
        "date": "2021-10-21",
        "time": "20:30:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Brick & Mortar Music Hall",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "1710 Mission Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAev",
                    "name": "Pop"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vk1t",
                    "name": "Pop"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGXBOcZZvS2N4",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "10:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGXBOcZZvS2Np",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "11:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGXBOcZZvS2N9",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "12:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGXBOcZZvS2Nb",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "13:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGXBOcZZvS2N_",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "14:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGXBOcZZvS2NQ",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "15:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGXBOcZZvS2Nh",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "16:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSvg9r8ZvJ_65",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "17:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSvg9r8ZvJ_6G",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "18:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSvg9r8ZvJ_6u",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "19:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AoFw7P",
        "name": "Megan Stalter",
        "url": "https://www.ticketweb.com/event/megan-stalter-bimbos-365-club-tickets/11232125",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": true
        },
        "date": "2021-10-22",
        "time": "19:00:00",
        "priceMin": 29.5,
        "priceMax": 29.5,
        "venue": {
            "name": "Bimbo's 365 Club",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94133",
            "streetAddress": "1025 Columbus Avenue"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpRemKN_d",
        "name": "Ryan Hamilton",
        "url": "https://concerts.livenation.com/ryan-hamilton-san-francisco-california-10-22-2021/event/1C005AF0AE4E3643",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/37c/65f0f10a-da8f-4d72-ad01-614f4531537c_1074941_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "19:30:00",
        "priceMin": 25,
        "priceMax": 25,
        "venue": {
            "name": "Cobb's Comedy Club",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94133",
            "streetAddress": "915 Columbus Avenue "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpsLS5pjA",
        "name": "Sheng Wang",
        "url": "https://concerts.livenation.com/sheng-wang-san-francisco-california-10-22-2021/event/1C005B17F32D6705",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/dec/d36b1e44-e6ea-4379-bc8e-29003437edec_1290391_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "19:30:00",
        "priceMin": 27,
        "priceMax": 27,
        "venue": {
            "name": "Punch Line Comedy Club - San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94111",
            "streetAddress": "444 Battery Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdAb8b",
        "name": "Jesus Christ Superstar",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdAb8b",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/505/538e2df1-7ab0-41ed-8166-b861024f1505_185121_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "19:30:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Golden Gate Theater",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "1 Taylor St."
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAve",
                    "name": "Musical"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdaP86",
        "name": "San Francisco Symphony",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdaP86",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/c/f7b/ef64d601-8740-43cd-86ea-ed9b392e4f7b_105961_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": true
        },
        "date": "2021-10-22",
        "time": "19:30:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Davies Symphony Hall",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "201 Van Ness Ave."
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvl",
                    "name": "Other"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vk1I",
                    "name": "Other"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5e0ZpRaa6oi7",
        "name": "Andy Mineo, Sonreal, Propoganda, Wordsplayed",
        "url": "https://www.ticketweb.com/event/andy-mineo-sonreal-propoganda-wordsplayed-august-hall-tickets/11192165?REFERRAL_ID=tmfeed",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/2fe/cfb4643d-59b9-4cea-901f-faac6cc2b2fe_1480371_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "20:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "August Hall",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "420 Mason St"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAv1",
                    "name": "Hip-Hop/Rap"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vaa1",
                    "name": "French Rap"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZ4VqSWoX_",
        "name": "Eagles",
        "url": "https://www.ticketmaster.com/eagles-san-francisco-california-10-22-2021/event/1C00574773F51F99",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "20:00:00",
        "priceMin": 129,
        "priceMax": 349,
        "venue": {
            "name": "Chase Center",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94158",
            "streetAddress": "300 16th Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAeA",
                    "name": "Rock"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v6F1",
                    "name": "Pop"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpR9l547P",
        "name": "Wanda Sykes",
        "url": "https://concerts.livenation.com/wanda-sykes-san-francisco-california-10-22-2021/event/1C005AF5EB2D5125",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/5d8/c323dfa5-5cd8-4948-bbaa-2adc7afa05d8_86111_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "20:00:00",
        "priceMin": 45,
        "priceMax": 95,
        "venue": {
            "name": "The Masonic",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94108",
            "streetAddress": "1111 California St"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpdwyp6ic",
        "name": "Slander",
        "url": "https://www.ticketmaster.com/slander-san-francisco-california-10-22-2021/event/1C00583CB9587B2D",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/a9e/c68f07c7-0f72-41fb-95a4-1f80e99faa9e_1209951_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "20:00:00",
        "priceMin": 42.5,
        "priceMax": 42.5,
        "venue": {
            "name": "Bill Graham Civic Auditorium",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "99 Grove Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvF",
                    "name": "Dance/Electronic"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7va1k",
                    "name": "Witchstep"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSvg9r8ZvJ_6C",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "20:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AoGdk4",
        "name": "BratPack",
        "url": "https://www.ticketweb.com/event/bratpack-feinsteins-at-the-nikko-tickets/11303195",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": true
        },
        "date": "2021-10-22",
        "time": "20:00:00",
        "priceMin": 89,
        "priceMax": 104,
        "venue": {
            "name": "Feinstein's at The Nikko",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "222 Mason Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAev",
                    "name": "Pop"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkEI",
                    "name": "New Wave"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AoGybg",
        "name": "Mark Ellis LIVE at Milk Bar (San Francisco, CA)",
        "url": "https://www.ticketweb.com/event/mark-ellis-live-at-milk-milk-bar-tickets/11339635",
        "image": {
            "ratio": "3_2",
            "url": "https://i.ticketweb.com/i/00/10/42/93/69_Edp.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "20:00:00",
        "priceMin": 20,
        "priceMax": 20,
        "venue": {
            "name": "Milk Bar",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94117",
            "streetAddress": "1840 haight street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nl",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdFk4J",
        "name": "Jeremy Zucker",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdFk4J",
        "image": {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/2fa/2bd29a26-63ed-4ff5-a353-8ff549f572fa_1475711_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "20:30:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "The Regency Ballroom",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94109",
            "streetAddress": "1290 Sutter Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvl",
                    "name": "Other"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vk1I",
                    "name": "Other"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AoubAP",
        "name": "Lyrics Born",
        "url": "https://www.ticketweb.com/event/lyrics-born-the-independent-tickets/11358165",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": true
        },
        "date": "2021-10-22",
        "time": "21:00:00",
        "priceMin": 22,
        "priceMax": 22,
        "venue": {
            "name": "The Independent",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94117",
            "streetAddress": "628 Divisadero St"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvv",
                    "name": "Alternative"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAvn",
                    "name": "Alternative Rock"
                },
                "family": false
            },
            {
                "primary": false,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAeA",
                    "name": "Rock"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v6F1",
                    "name": "Pop"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5e0ZpsHFSZm5",
        "name": "Rumbahã­A - \"Casi Al Compã¡S\" Release Party Feat. DJ Biel",
        "url": "https://www.ticketweb.com/event/rumbaha-casi-al-brick-and-mortar-music-hall-tickets/11332165?REFERRAL_ID=tmfeed",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": true
        },
        "date": "2021-10-22",
        "time": "21:45:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Brick & Mortar Music Hall",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "1710 Mission Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAeF",
                    "name": "World"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v6Jt",
                    "name": "World"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpRSsNUf2",
        "name": "The Charm Offensive",
        "url": "https://concerts.livenation.com/the-charm-offensive-san-francisco-california-10-22-2021/event/1C005AFCF18F650F",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/777/eaf12fab-8bb2-4462-ab43-0fbe91de8777_1121981_RETINA_PORTRAIT_16_9.jpg",
            "width": 640,
            "height": 360,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "21:45:00",
        "priceMin": 25,
        "priceMax": 25,
        "venue": {
            "name": "Cobb's Comedy Club",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94133",
            "streetAddress": "915 Columbus Avenue "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpsLSGkj6",
        "name": "Sheng Wang",
        "url": "https://concerts.livenation.com/sheng-wang-san-francisco-california-10-22-2021/event/1C005B17F3306707",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/dec/d36b1e44-e6ea-4379-bc8e-29003437edec_1290391_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
        },
        "date": "2021-10-22",
        "time": "21:45:00",
        "priceMin": 27,
        "priceMax": 27,
        "venue": {
            "name": "Punch Line Comedy Club - San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94111",
            "streetAddress": "444 Battery Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1Ao8_OA",
        "name": "RUMBAHÍA - \"CASI AL COMPÁS\" RELEASE PARTY FEAT. DJ BIEL",
        "url": "https://www.ticketweb.com/event/rumbaha-casi-al-brick-and-mortar-music-hall-tickets/11419805",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": true
        },
        "date": "2021-10-22",
        "time": "22:00:00",
        "priceMin": 15,
        "priceMax": 15,
        "venue": {
            "name": "Brick and Mortar Music Hall",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "1710 Mission Street "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAeF",
                    "name": "World"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFdJ",
                    "name": "Latin"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AoGV_A",
        "name": "Megan Stalter",
        "url": "https://www.ticketweb.com/event/megan-stalter-bimbos-365-club-tickets/11334645",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": true
        },
        "date": "2021-10-22",
        "time": "22:00:00",
        "priceMin": 29.5,
        "priceMax": 29.5,
        "venue": {
            "name": "Bimbo's 365 Club",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94133",
            "streetAddress": "1025 Columbus Avenue"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdkfAZ",
        "name": "Jesus Christ Superstar",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdkfAZ",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/505/538e2df1-7ab0-41ed-8166-b861024f1505_185121_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "13:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Golden Gate Theater",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "1 Taylor St."
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAve",
                    "name": "Musical"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpAmdKS51",
        "name": "Ronny Chieng: The Hope You Get Rich Tour",
        "url": "https://concerts.livenation.com/ronny-chieng-the-hope-you-get-san-francisco-california-10-23-2021/event/1C00585B834F32CA",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/720/5ac07846-0cf4-42fa-8db6-6ace86f97720_1302601_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "19:00:00",
        "priceMin": 34.5,
        "priceMax": 44.5,
        "venue": {
            "name": "The Masonic",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94108",
            "streetAddress": "1111 California St"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpsLSGJja",
        "name": "Sheng Wang",
        "url": "https://concerts.livenation.com/sheng-wang-san-francisco-california-10-23-2021/event/1C005B17F3326709",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/dec/d36b1e44-e6ea-4379-bc8e-29003437edec_1290391_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "19:00:00",
        "priceMin": 27,
        "priceMax": 27,
        "venue": {
            "name": "Punch Line Comedy Club - San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94111",
            "streetAddress": "444 Battery Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpRemfd_A",
        "name": "Ryan Hamilton",
        "url": "https://concerts.livenation.com/ryan-hamilton-san-francisco-california-10-23-2021/event/1C005AF0AE503645",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/37c/65f0f10a-da8f-4d72-ad01-614f4531537c_1074941_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "19:30:00",
        "priceMin": 25,
        "priceMax": 25,
        "venue": {
            "name": "Cobb's Comedy Club",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94133",
            "streetAddress": "915 Columbus Avenue "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdaP8F",
        "name": "San Francisco Symphony",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdaP8F",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/c/f7b/ef64d601-8740-43cd-86ea-ed9b392e4f7b_105961_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": true
        },
        "date": "2021-10-23",
        "time": "19:30:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Davies Symphony Hall",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "201 Van Ness Ave."
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvl",
                    "name": "Other"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vk1I",
                    "name": "Other"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdkfAe",
        "name": "Jesus Christ Superstar",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdkfAe",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/505/538e2df1-7ab0-41ed-8166-b861024f1505_185121_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "19:30:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Golden Gate Theater",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "1 Taylor St."
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAve",
                    "name": "Musical"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZ4VqWuxjo",
        "name": "Eagles",
        "url": "https://www.ticketmaster.com/eagles-san-francisco-california-10-23-2021/event/1C0057477D362711",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "20:00:00",
        "priceMin": 129,
        "priceMax": 750,
        "venue": {
            "name": "Chase Center",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94158",
            "streetAddress": "300 16th Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAeA",
                    "name": "Rock"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v6F1",
                    "name": "Pop"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSvg9r8ZvJ_63",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "20:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AoGdAP",
        "name": "BratPack",
        "url": "https://www.ticketweb.com/event/bratpack-feinsteins-at-the-nikko-tickets/11303165",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": true
        },
        "date": "2021-10-23",
        "time": "20:00:00",
        "priceMin": 84,
        "priceMax": 104,
        "venue": {
            "name": "Feinstein's at The Nikko",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "222 Mason Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAev",
                    "name": "Pop"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkEI",
                    "name": "New Wave"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZ4gNsG9_w",
        "name": "Dan Deacon",
        "url": "https://concerts.livenation.com/dan-deacon-san-francisco-california-10-23-2021/event/1C005758F1317672",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/c7d/09c80647-00ff-4751-aebd-42eeeb1aac7d_1193471_ARTIST_PAGE_3_2.jpg",
            "width": 305,
            "height": 203,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "21:00:00",
        "priceMin": 23,
        "priceMax": 23,
        "venue": {
            "name": "The Fillmore",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94115",
            "streetAddress": "1805 Geary Boulevard"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvF",
                    "name": "Dance/Electronic"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7va1k",
                    "name": "Witchstep"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdAaq0",
        "name": "Elderbrook",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdAaq0",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/581/99c1b045-a234-47c0-8dce-3385cf3d2581_745921_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "21:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "The Regency Ballroom",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94109",
            "streetAddress": "1290 Sutter Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvl",
                    "name": "Other"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vk1I",
                    "name": "Other"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1Ao7SoA",
        "name": "Delta Rae",
        "url": "https://www.ticketweb.com/event/delta-rae-the-independent-tickets/11133445",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/c07/b5aae620-2838-4d47-84a5-a9398e24cc07_1470581_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            "width": 2048,
            "height": 1152,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "21:00:00",
        "priceMin": 28,
        "priceMax": 28,
        "venue": {
            "name": "The Independent",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94117",
            "streetAddress": "628 Divisadero St"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvv",
                    "name": "Alternative"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAvn",
                    "name": "Alternative Rock"
                },
                "family": false
            },
            {
                "primary": false,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvv",
                    "name": "Alternative"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAvJ",
                    "name": "Alternative"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AoGaAP",
        "name": "MORDRED",
        "url": "https://www.ticketweb.com/event/mordred-brick-and-mortar-music-hall-tickets/11309165",
        "image": {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/c/e7c/86478562-7218-4e8f-b9d4-8080fe168e7c_105581_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": true
        },
        "date": "2021-10-23",
        "time": "21:00:00",
        "priceMin": 12,
        "priceMax": 12,
        "venue": {
            "name": "Brick and Mortar Music Hall",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "1710 Mission Street "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvt",
                    "name": "Metal"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkFd",
                    "name": "Heavy Metal"
                },
                "family": false
            },
            {
                "primary": false,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvt",
                    "name": "Metal"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkFd",
                    "name": "Heavy Metal"
                },
                "family": false
            },
            {
                "primary": false,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvt",
                    "name": "Metal"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vk6E",
                    "name": "Metal"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpsLSupj5",
        "name": "Sheng Wang",
        "url": "https://concerts.livenation.com/sheng-wang-san-francisco-california-10-23-2021/event/1C005B17F335670B",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/dec/d36b1e44-e6ea-4379-bc8e-29003437edec_1290391_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "21:15:00",
        "priceMin": 27,
        "priceMax": 27,
        "venue": {
            "name": "Punch Line Comedy Club - San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94111",
            "streetAddress": "444 Battery Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpAwv53OG",
        "name": "Ronny Chieng: The Hope You Get Rich Tour",
        "url": "https://concerts.livenation.com/ronny-chieng-the-hope-you-get-san-francisco-california-10-23-2021/event/1C00585C812D280C",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/720/5ac07846-0cf4-42fa-8db6-6ace86f97720_1302601_TABLET_LANDSCAPE_3_2.jpg",
            "width": 1024,
            "height": 683,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "21:30:00",
        "priceMin": 34.5,
        "priceMax": 44.5,
        "venue": {
            "name": "The Masonic",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94108",
            "streetAddress": "1111 California St"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpRem4K_a",
        "name": "Ryan Hamilton",
        "url": "https://concerts.livenation.com/ryan-hamilton-san-francisco-california-10-23-2021/event/1C005AF0AE553649",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/37c/65f0f10a-da8f-4d72-ad01-614f4531537c_1074941_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
        },
        "date": "2021-10-23",
        "time": "21:45:00",
        "priceMin": 25,
        "priceMax": 25,
        "venue": {
            "name": "Cobb's Comedy Club",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94133",
            "streetAddress": "915 Columbus Avenue "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5e0ZpSKECfYi",
        "name": "Cut Copy DJ Set, Onemohit, Mishka",
        "url": "https://www.ticketweb.com/event/cut-copy-dj-set-onemohit-august-hall-tickets/11368065?REFERRAL_ID=tmfeed",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/27e/458d1b62-6e4f-4ffd-8941-9ed303d8e27e_106041_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": true
        },
        "date": "2021-10-23",
        "time": "22:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "August Hall",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "420 Mason St"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAed",
                    "name": "Reggae"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vknl",
                    "name": "Reggae"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18b3Blu1_hkYZvdFo-",
        "name": "Gogh with Lifeway Kefir Immersive Yoga",
        "url": "https://www.universe.com/events/gogh-with-lifeway-kefir-immersive-yoga-tickets-GQ7XS9?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "07:45:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSA0L6OZvjASj",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "10:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSA0L6OZvjASq",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "11:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSA0L6OZvjASr",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "12:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDIQ88t8Zv0xl_",
        "name": "Immersive Van Gogh (Prime) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-prime-n-tickets-4RSMT2?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "13:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdkfAd",
        "name": "Jesus Christ Superstar",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdkfAd",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/505/538e2df1-7ab0-41ed-8166-b861024f1505_185121_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "13:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Golden Gate Theater",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "1 Taylor St."
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAve",
                    "name": "Musical"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSCIHoYZvV5Gu",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "14:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSCDrROZvPACq",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "15:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSCDrROZvPACr",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "16:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSCIHoYZvV5GC",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "17:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBMSCIHoYZvV5G2",
        "name": "Immersive Van Gogh (Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-peak-n-tickets-YX2Q8F?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "18:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "LvZ18boBDGHiRcYZvytr6",
        "name": "Immersive Van Gogh (Off Peak) [N]",
        "url": "https://www.universe.com/events/immersive-van-gogh-off-peak-n-tickets-NYCBRM?ref=ticketmaster",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/e73/d67e5fb4-c368-41ef-8208-2149031dbe73_1388471_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "19:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "SVN West San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "10 South Van Ness Ave"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7v7nl",
                    "name": "Fine Art"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ld",
                    "name": "Fine Art"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6I",
                    "name": "Exhibit"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AoGfFA",
        "name": "Christopher Cross: 40th Anniversary Tour",
        "url": "https://www.ticketweb.com/event/christopher-cross-40th-anniversary-tour-bimbos-365-club-tickets/11314205",
        "image": {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/d39/e06059e3-be91-437f-accc-ba8a083dfd39_1253041_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "19:00:00",
        "priceMin": 49.5,
        "priceMax": 49.5,
        "venue": {
            "name": "Bimbo's 365 Club",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94133",
            "streetAddress": "1025 Columbus Avenue"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAeA",
                    "name": "Rock"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v6F1",
                    "name": "Pop"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpRRwN7SZ",
        "name": "Really Funny Comedians (Who Happen to Be Women) with Julie Kim",
        "url": "https://concerts.livenation.com/really-funny-comedians-who-happen-to-san-francisco-california-10-24-2021/event/1C005AFBF28C4CC0",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/10d/d803cfe8-f1b5-4de2-a2af-9ab8f860310d_1483261_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "19:30:00",
        "priceMin": 20,
        "priceMax": 20,
        "venue": {
            "name": "Cobb's Comedy Club",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94133",
            "streetAddress": "915 Columbus Avenue "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpnU4zeDB",
        "name": "Anderson East - Maybe We Never Die Tour",
        "url": "https://concerts.livenation.com/anderson-east-maybe-we-never-die-san-francisco-california-10-24-2021/event/1C005AAD95E02EFA",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/961/412a4a3a-4754-4ed5-ad0d-e097b96e9961_1435411_TABLET_LANDSCAPE_16_9.jpg",
            "width": 1024,
            "height": 576,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "20:00:00",
        "priceMin": 32.5,
        "priceMax": 32.5,
        "venue": {
            "name": "The Fillmore",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94115",
            "streetAddress": "1805 Geary Boulevard"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAeA",
                    "name": "Rock"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v6F1",
                    "name": "Pop"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "G5vYZpsLgykjD",
        "name": "S. F. Comedy Showcase",
        "url": "https://concerts.livenation.com/s-f-comedy-showcase-san-francisco-california-10-24-2021/event/1C005B17F5E4673B",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/c8b/28f14b21-0890-485a-a04a-4bebb12b6c8b_1444221_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "20:00:00",
        "priceMin": 16,
        "priceMax": 16,
        "venue": {
            "name": "Punch Line Comedy Club - San Francisco",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94111",
            "streetAddress": "444 Battery Street"
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1",
                    "name": "Comedy"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17",
                    "name": "Comedy"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7nI",
                    "name": "Undefined"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7v7lJ",
                    "name": "Undefined"
                },
                "family": false
            }
        ]
    },
    {
        "id": "Z7r9jZ1AdFdqJ",
        "name": "Moneybagg Yo",
        "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdFdqJ",
        "image": {
            "ratio": "3_2",
            "url": "https://s1.ticketm.net/dam/a/72e/6094a95a-0c12-4c2b-a25e-1a292ca2a72e_1251831_RETINA_PORTRAIT_3_2.jpg",
            "width": 640,
            "height": 427,
            "fallback": false
        },
        "date": "2021-10-24",
        "time": "20:00:00",
        "priceMin": 0,
        "priceMax": 0,
        "venue": {
            "name": "Warfield",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94102",
            "streetAddress": "982 Market St."
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAvl",
                    "name": "Other"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vk1I",
                    "name": "Other"
                },
                "family": false
            }
        ]
    },
    {
        "id": "rZ7HnEZ1AouJA4",
        "name": "Mykal Kilgore",
        "url": "https://www.ticketweb.com/event/mykal-kilgore-brick-and-mortar-music-hall-tickets/11366155",
        "image": {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/c/48b/2352e3b5-8496-496b-97a3-e605177e848b_105851_EVENT_DETAIL_PAGE_16_9.jpg",
            "width": 205,
            "height": 115,
            "fallback": true
        },
        "date": "2021-10-24",
        "time": "21:00:00",
        "priceMin": 15,
        "priceMax": 15,
        "venue": {
            "name": "Brick and Mortar Music Hall",
            "city": "San Francisco",
            "state": "California",
            "postalCode": "94103",
            "streetAddress": "1710 Mission Street "
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAee",
                    "name": "R&B"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkIt",
                    "name": "R&B"
                },
                "family": false
            }
        ]
    }
]