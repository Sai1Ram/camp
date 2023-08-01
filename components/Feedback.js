import React, { useEffect, useState } from 'react'
import Comment from './Comment';

const Feedback = () => {


  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [feedback, setFeedback] = useState("")
  const [roll, setRoll] = useState("")
  // const [data, setData] = useState()
  const [data, setData] = useState(
    [
      {
        "number": 1,
        "roll": "121CR0637",
        "name": "Brijesh",
        "year": 9439112241,
        "feeback": "Hope this time also Multi-Ethnic Fest will rock."
      },
      {
        "number": 1,
        "roll": "121ME0727",
        "name": "jraj",
        "year": 9040402899,
        "feeback": "quite impressed by the initiative"
      },
      {
        "number": 1,
        "roll": "121CS0198",
        "name": "Animesh Panda",
        "year": 8093818285,
        "feeback": "Excited to attend the COSMO this time"
      },
      {
        "number": 1,
        "roll": "121MN0539",
        "name": "BISWAJEET",
        "year": 7655042927,
        "feeback": "Waiting for Cosmo to happen."
      },
      {
        "number": 1,
        "roll": "421MA5014",
        "name": "Mahesh Prasad",
        "year": 9696969696,
        "feeback": "Looking forward to being a part of COSMO this time! Can't wait for the event!"
      },
      {
        "number": 1,
        "roll": "121EE0351",
        "name": "Siba",
        "year": 6371120764,
        "feeback": "Anticipating another spectacular and mesmerizing Multi-Ethnic Fest this time!"
      }
    ]
  );
  const [isLoading, setIsLoading] = useState(false);

  // console.log({ data });
  // // console.log({ data });;

 const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, year, feedback, roll);
    try {
      setIsLoading(true);
      var raw = JSON.stringify({
        "number": "1",
        "roll": roll,
        "name": name,
        "year": year,
        "feedback": feedback
      });
      setName(''); setYear(""); setFeedback(""); setRoll("");

      var requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow'
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_GOOGLE_API}`, requestOptions)
      const result = await res.json();
      // console.log(result);
      alert("Suggestion Submitted Successfully");
      let temp = result.data;
      temp.reverse();
      temp = temp.slice(0, 6);
      setData(temp);
      // setData(result.data);
      // setIsLoading(false);


    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }


  const loadData = async () => {

    // console.log(name, year, feedback, roll);
    try {
      // setIsLoading(true);
      var raw = JSON.stringify({
        "number": "",
        "roll": "",
        "name": "",
        "year": "",
        "feedback": ""
      });
      setName(''); setYear(""); setFeedback(""); setRoll("");

      var requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow'
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_GOOGLE_API}`, requestOptions)
      // const res = await fetch("https://script.google.com/macros/s/AKfycbwe7qhvPGnElNMFB2IPMeZtzJhQIXXWmH-3Mu2kawTT2pOadycyDeNG3jCzg6YvvYj4/exec", requestOptions)
      const result = await res.json();

      let temp = result.data;
      temp.reverse();
      temp = temp.slice(0, 6);
      setData(temp);
      // console.log(result);
      // alert("Suggestion Submitted Successfully");
      // setIsLoading(false);


    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   loadData();
  // }, [])


  const Loader = () => (

    <button className="flex items-center rounded-lg font-semibold  text-white w-full justify-center" disabled>
      <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span className="font-medium"> Loading ... </span>
    </button>

  )

  return (
    <div className='w-full text-white max-w-7xl mx-auto pb-24'>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-medium leading-6 text-white-900">Any Suggestions </h3>
              <p className="mt-1 text-base text-white-600">Provide any suggestions so that we can work for it if we are elected.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2" >
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5  sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-white-700">
                        Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        minLength={4}
                        required
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="mt-1 p-4 block w-full shadow-sm sm:text-sm text-black rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-white-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={year}
                        minLength={10}
                        maxLength={10}
                        required
                        placeholder='Enter your phone number Format: 9876543210'
                        pattern="[6789][0-9]{9}"
                        onChange={e => setYear(e.target.value)}
                        className="mt-1 p-4 block w-full shadow-sm sm:text-sm text-black rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-white-700">
                        Roll
                      </label>
                      <input
                        type="text"
                        value={roll}
                        required
                        placeholder='Enter your roll number'
                        minLength={9}
                        maxLength={9}
                        onChange={e => setRoll(e.target.value)}
                        className="mt-1 p-4 block w-full shadow-sm sm:text-sm text-black rounded-md"
                      />
                    </div>



                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-white-700">
                        Feedback
                      </label>
                      <input
                        type="text"
                        value={feedback}
                        required
                        placeholder='Enter your feedback'
                        minLength={10}
                        onChange={e => setFeedback(e.target.value)}
                        className="mt-1 p-4 block w-full shadow-sm sm:text-sm text-black rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-red-500 w-44  focus:outline-none ml-6 "
                >
                  {isLoading ? <Loader /> : "Save"}

                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className='mt-16 mb-4 text-xl font-semibold'>Recent Suggestions</p>
      <div className='  grid grid-cols-1 xl:grid-cols-3'>
        {
          data ? data?.map((item, index) => (
            <Comment key={index} name={item.name} roll={item.roll} feedback={item.feeback} />
          )) : <Loader />
        }


      </div>
    </div>
  )
}

export default Feedback