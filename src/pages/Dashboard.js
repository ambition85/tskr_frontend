import React, { useRef, useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Highcharts from 'highcharts';
import moment from 'moment';
import { Link } from 'react-router-dom'


export default function DashBoard() {

  const refContainer = useRef(null);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const chart = Highcharts.chart(refContainer.current, {
      chart: {
        type: 'line'
      }, // type of the chart
      // title: {
      //   text: 'Line Chart Title'
      // }, // title of the chart
      // subtitle: {
      //   text: 'Lorem Ipsum is simply dummy text'
      // }, // subtitle of the chart
      yAxis: {
        min: -1.0,
        max: 1.0,
        tickInterval: 0.2
        // title: {
        //   text: 'Y Axis Title'
        // }, // the title of the Y Axis
      },
      xAxis: {
        type: 'datetime',
        min: moment('2023-07-27').valueOf(),
        max: moment('2023-08-10').valueOf(),
        tickInterval: 2 * 24 * 3600 * 1000, // 2 days in milliseconds
        labels: {
          formatter: function () {
            return Highcharts.dateFormat('%b %e, %Y', this.value);
          },
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:13px;font-weight:bold;">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      }, // tooltip appears when hovering over a point
      credits: {
        enabled: false
      },
      series: dataSource // set of the data
    });

    if (dataSource.length > 0) {
      chart.hideLoading();
    }
    else {
      chart.showLoading();
    }
  }, [dataSource]);

  useEffect(() => {
    setTimeout(() => {
      setDataSource([{
        name: 'Japan',
        data: [10, 14, 18, 61, 65, 72, 74, 79, 87, 89, 92, 93]
      }]);
    }, 2000);
  }, []);

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col'>
        <div className='flex w-[100%] bg-[#ebe3e3]'>
          <div className='flex flex-col w-full gap-[30px] pt-[60px] pb-[60px] pr-[85px] pl-[85px]'>
            <div className='text-start text-[32px] font-[700] text-[#222]'>Dashboard</div>
            {/* Card section */}
            {/* Posted services */}
            <div className="grid grid-cols-4 gap-4">
              <div className='flex justify-between bg-[#fefeff] rounded-[4px] p-[30px] items-center'>
                <div className='flex flex-col'>
                  <span className='gray_color font-sans text-[15px]'>Posted Services</span>
                  <span className='text-start font-sans text-[28px]'>0</span>
                </div>
                <div className='flex justify-end'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-file-earmark-bar-graph text-[#254b3f]" viewBox="0 0 16 16"> <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" /> <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" /> </svg>
                </div>
              </div>

              {/* Completed services */}
              <div className='flex justify-between bg-[#fefeff] rounded-[4px] p-[30px] items-center'>
                <div className='flex flex-col'>
                  <span className='gray_color font-sans text-[15px]'>Completed Services</span>
                  <span className='text-start font-sans text-[28px]'>0</span>
                </div>
                <div className='flex justify-end'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-patch-check text-[#254b3f]" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" /> <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" /> </svg>
                </div>
              </div>

              {/* In Queue services */}
              <div className='flex justify-between bg-[#fefeff] rounded-[4px] p-[30px] items-center'>
                <div className='flex flex-col'>
                  <span className='gray_color font-sans text-[15px]'>In Queue Services</span>
                  <span className='text-start font-sans text-[28px]'>0</span>
                </div>
                <div className='flex justify-end'>
                  <svg className='text-[#254b3f]' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M13 6H11V7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7V6Z" fill="currentColor" /> <path fillRule="evenodd" clipRule="evenodd" d="M6 2V4H7V7C7 9.76142 9.23858 12 12 12C9.23858 12 7 14.2386 7 17V20H6V22H18V20H17V17C17 14.2386 14.7614 12 12 12C14.7614 12 17 9.76142 17 7V4H18V2H6ZM9 4H15V7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7V4ZM9 17V20H15V17C15 15.3431 13.6569 14 12 14C10.3431 14 9 15.3431 9 17Z" fill="currentColor" /> </svg>
                </div>
              </div>

              {/* Review */}
              <div className='flex justify-between bg-[#fefeff] rounded-[4px] p-[30px] items-center'>
                <div className='flex flex-col'>
                  <span className='gray_color font-sans text-[15px]'>Review</span>
                  <span className='text-start font-sans text-[28px]'>0</span>
                </div>
                <div className='flex justify-end'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chat-left-dots text-[#254b3f]" viewBox="0 0 16 16"> <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" /> <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /> </svg>
                </div>
              </div>
            </div>
            {/* Chart section */}
            <div className="flex gap-4">
              <div className='bg-[#fefeff] w-[70%] rounded-[4px] p-[30px] items-center'>
                <div className='flex flex-col'>
                  <span className='font-sans text-start text-[17px]'>Your Profile Views</span>
                  <br />
                  <hr className='text-[#f2f2f2] pb-[10px]' />
                  <div ref={refContainer} />
                </div>
              </div>

              <div className='bg-[#fefeff] w-[30%] h-[120px] rounded-[4px] p-[30px] items-center'>
                <div className='flex flex-col'>
                  <span className='font-sans text-start text-[17px]'>Notification</span>
                  <br />
                  <hr className='text-[#f2f2f2] pb-[10px]' />
                </div>
              </div>
            </div>
            {/* Recent Service Orders */}
            <div className='bg-[#fefeff] rounded-[4px] p-[30px] items-center'>
              <div className='flex flex-col'>
                <span className='font-sans gray_color text-start text-[17px]'>Recent Service Orders</span>
                <br />
                <hr className='text-[#f2f2f2] pb-[20px]' />
                <span className='font-sans gray_color text-start text-[17px]'>No service orders found.</span>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className='flex bg-[#fefeff] justify-between p-[10px]'>
          <div className='flex justify-start mb-[20px] p-[15px]'>
            <span className='font-sans text-[14px] gray_color'>2023 Tskr.com – All rights reserved.</span>
          </div>
          <div>
            <Link className='flex justify-end mb-[20px] p-[15px] items-center border-2 border-[#a0a5a7]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-headset gray_color" viewBox="0 0 16 16"> <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" /> </svg>
              <span className='font-sans gray_color text-[15px] pl-[10px]'>Support Center</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
