import {Form, Dropdown, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import './App.css';
// import axios from "axios";

function App() {
  const[selectedCrypto, setSelectedCrypto] = useState('BTC');  
  const[selectedDuration, setSelectedDuration] = useState('1h');
  const[text, setText] = useState('');

  // const animateText = chatText => {
  //   let animatedText = '';
  //   let index = 0;
  //   let wordarray = chatText.split(' ');
  //   // console.log(wordarray);
  //   const timerId = setInterval(() => {
  //     if (index < wordarray.length) {
  //       animatedText += wordarray[index] + ' ';
  //       setText(animatedText);
  //       index++;
  //     } else {
  //       clearInterval(timerId);
  //     }
  //   }, 10);

  //   Animated.timing(animatedValue, {
  //     toValue: 1,
  //     duration: chatText.length, // Adjust the duration according to your preference
  //     useNativeDriver: true,
  //   }).start();
  // };

  const currentDate = new Date();
  let threeHoursAgo = new Date(currentDate.getTime());
  switch (selectedDuration) {
    case '1h':
      threeHoursAgo = new Date(currentDate.getTime() - 1 * 60 * 60 * 1000);
      break;
    case '2h':
      threeHoursAgo = new Date(currentDate.getTime() - 2 * 60 * 60 * 1000);
      break;
    case '3h':
      threeHoursAgo = new Date(currentDate.getTime() - 3 * 60 * 60 * 1000);
      break;
    case '12h':
      threeHoursAgo = new Date(currentDate.getTime() - 12 * 60 * 60 * 1000);
      break;
    case '1d':
      threeHoursAgo = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
      break;
    case '1w':
      threeHoursAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      break;
    case '1m':
      threeHoursAgo = new Date(
        currentDate.getTime() - 30 * 24 * 60 * 60 * 1000,
      );
      break;
    default:
      break;
  }
  const startDate = threeHoursAgo
    .toISOString()
    .replace(/[:-]/g, '')
    .replace(/T/g, '')
    .slice(0, -5);
  const endDate = currentDate
    .toISOString()
    .replace(/[:-]/g, '')
    .replace(/T/g, '')
    .slice(0, -5);

    const getAPI = () => {
      // Your function logic here
      // var raw = JSON.stringify({
      //   start: startDate,
      //   end: endDate,
      //   currency: selectedCrypto,
      // });
      // var requestOptions = {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: raw,
      //   redirect: 'follow'
      // };
      // fetch("https://crypto-u54t.onrender.com/summary", requestOptions)
      //   .then(response => console.log(response))
      //   .then(result => setText(result['summary']))
      //   .catch(error => console.log('error', error));
      // console.log(startDate);
      // console.log(endDate);
      // console.log(selectedCrypto);
      // console.log('success: Calling Fetch');
      var raw = JSON.stringify({
        start: startDate,
        end: endDate,
        currency: selectedCrypto,
      });
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: raw,
      };
      fetch('https://new-crypto.onrender.com/summary', options)
        .then(response => response.json())
        .then(result => setText(result.summary))
        .catch(error => console.log('error', error));
      console.log(startDate);
      console.log(endDate);
      console.log(selectedCrypto);
      console.log('success: Calling Fetch');
    };
  return (
    <>
      <section
        id="home"
        className=" flex relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Choose CryptoCurrency & Hour and Read
                </h1>

                <Form>
                  <Form.Group controlId="exampleForm.SelectCrypto">
                    <Form.Label>Crypto Currenct</Form.Label>
                    <Dropdown onSelect={(eventKey) => setSelectedCrypto(eventKey)}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedCrypto}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="BTC">BTC</Dropdown.Item>
                        <Dropdown.Item eventKey="ETH">ETH</Dropdown.Item>
                        <Dropdown.Item eventKey="BNB">BNB</Dropdown.Item>
                        <Dropdown.Item eventKey="USDT">USDT</Dropdown.Item>
                        <Dropdown.Item eventKey="XRP">XRP</Dropdown.Item>
                        <Dropdown.Item eventKey="ADA">ADA</Dropdown.Item>
                        <Dropdown.Item eventKey="DOGE">DOGE</Dropdown.Item>
                        <Dropdown.Item eventKey="UNI">UNI</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group controlId="exampleForm.SelectDuration">
                    <Form.Label>Duration</Form.Label>
                    <Dropdown onSelect={(eventKey) => setSelectedDuration(eventKey)}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedDuration}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="1h">1 Hour</Dropdown.Item>
                        <Dropdown.Item eventKey="2h">2 Hours</Dropdown.Item>
                        <Dropdown.Item eventKey="3h">3 Hours</Dropdown.Item>
                        <Dropdown.Item eventKey="12h">12 Hours</Dropdown.Item>
                        <Dropdown.Item eventKey="1d">1 Day</Dropdown.Item>
                        <Dropdown.Item eventKey="1w">1 Week</Dropdown.Item>
                        <Dropdown.Item eventKey="1m">1 Month</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </Form>

                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  {text}
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button onClick={getAPI}>{'   '}Read {'   '}  </Button>  
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default App;
