import React from 'react'
import s from "./Student.module.css"
function Student({img, _id, name, score, reports}) {
    return (
        <div className={s.container}>
            
            <div className={s.imgContainer}>
                <img src={img} alt="" width="45px" height="45px"/>
            </div>
            <div className={s.name}>
                <h4>{name}</h4>
            </div>
            <div className={s.stats}>
                <div className={s.rockets}>
                    <svg width="18" height="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48005 28.6886C7.93997 29.4803 7.03069 30 6 30H3C1.34315 30 0 28.6569 0 27.0001V13.5007C0 11.844 1.34315 10.5009 3 10.5009H6C6.29726 10.5009 6.58442 10.5441 6.85553 10.6246C8.46672 8.27808 13.8832 2.36297 15.3304 0.560802L15.7807 2.06991e-07H16.5C17.4222 -0.000138147 18.2134 0.0690389 19.1224 0.333714C21.1378 0.920536 22.5 2.29189 22.5 4.4998C22.5 5.27993 22.3619 6.11168 22.1073 7.03488C21.9389 7.6457 21.7308 8.26246 21.4456 9.02795C21.3587 9.26114 21.0108 10.1734 20.9322 10.3859C20.9178 10.4249 20.9039 10.4627 20.8905 10.4995H25.5C28.3044 10.4995 30 12.4757 30 14.9993C30 23.9143 28.1327 29.9987 24 29.9987L13.5516 29.9978C12.5113 30.0168 11.2582 29.878 9.99469 29.426C9.44283 29.2285 8.93511 28.9829 8.48005 28.6886ZM9 23.9989C9 25.3522 9.67795 26.1265 11.0053 26.6014C11.8659 26.9093 12.7881 27.0115 13.4446 26.9997C13.4555 26.9995 13.4555 26.9995 13.5 26.9988H24C25.5227 26.9988 27 22.1851 27 14.9993C27 14.0392 26.5368 13.4994 25.5 13.4994H19.5C17.7082 13.4994 17.3333 12.114 17.707 10.614C17.7949 10.2611 17.9234 9.87281 18.1184 9.3454C18.2037 9.11485 18.5534 8.19803 18.6344 7.98064C18.8916 7.29023 19.0742 6.74906 19.2152 6.23763C19.4039 5.55322 19.5 4.97465 19.5 4.4998C19.5 3.82337 19.1433 3.46424 18.2837 3.21396C17.9226 3.1088 17.5671 3.05085 17.1899 3.02256C14.8714 5.79402 9.60996 11.5516 9.21257 12.4794C9.06665 12.8201 9 13.1391 9 13.4994V23.9989ZM3 13.5007V27.0001H6V13.5007H3Z" fill="#0094FF"/>
                    </svg>
                    <h4 style={{"color":"rgb(32, 95, 230)"}}>{score}</h4>
                </div>
                <div className={s.reports}>
                    <svg width="18" height="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30 8.7868V21.2132L21.2132 30H8.7868L0 21.2132V8.7868L8.7868 0H21.2132L30 8.7868ZM20.0835 2.72727H9.91647L2.72727 9.91647V20.0835L9.91647 27.2727H20.0835L27.2727 20.0835V9.91647L20.0835 2.72727ZM15.0004 23.1796C14.2471 23.1796 13.6364 22.569 13.6364 21.8159C13.6364 21.0628 14.2471 20.4523 15.0004 20.4523C15.7538 20.4523 16.3645 21.0628 16.3645 21.8159C16.3645 22.569 15.7538 23.1796 15.0004 23.1796ZM13.6404 6.81593H16.3686V17.725H13.6404V6.81593Z" fill="#DD0B0B"/>
                    </svg>
                    <h4 style={{"color":"rgb(200, 0, 0)"}}>{reports}</h4>
                </div>
                <div className={s.asistencias}>
                    <h5>Asistencias: 60%</h5>
                </div>
                
            </div>
            <div className={s.details}>
                    <svg width="116" height="26" viewBox="0 0 116 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H106C110.971 1 115 5.02944 115 10V16C115 20.9706 110.971 25 106 25H1V1Z" stroke="#FFAB4C" stroke-width="2"/>
                        <path d="M12.064 18C11.8613 18 11.696 17.9413 11.568 17.824C11.4507 17.7067 11.392 17.552 11.392 17.36V7.36C11.392 7.168 11.4507 7.01333 11.568 6.896C11.696 6.77867 11.8613 6.72 12.064 6.72H15.184C16.9867 6.72 18.3787 7.21067 19.36 8.192C20.352 9.16267 20.848 10.5493 20.848 12.352C20.848 14.1547 20.352 15.5467 19.36 16.528C18.368 17.5093 16.976 18 15.184 18H12.064ZM15.104 16.88C18.0267 16.88 19.488 15.3707 19.488 12.352C19.488 9.344 18.0267 7.84 15.104 7.84H12.704V16.88H15.104ZM23.8921 18C23.6895 18 23.5241 17.9413 23.3961 17.824C23.2788 17.7067 23.2201 17.552 23.2201 17.36V7.36C23.2201 7.168 23.2788 7.01333 23.3961 6.896C23.5241 6.77867 23.6895 6.72 23.8921 6.72H29.8761C30.0681 6.72 30.2175 6.768 30.3241 6.864C30.4308 6.96 30.4841 7.09333 30.4841 7.264C30.4841 7.43467 30.4308 7.568 30.3241 7.664C30.2175 7.76 30.0681 7.808 29.8761 7.808H24.5161V11.728H29.5561C29.7481 11.728 29.8975 11.776 30.0041 11.872C30.1108 11.968 30.1641 12.1013 30.1641 12.272C30.1641 12.4427 30.1108 12.576 30.0041 12.672C29.8975 12.768 29.7481 12.816 29.5561 12.816H24.5161V16.912H29.8761C30.0681 16.912 30.2175 16.96 30.3241 17.056C30.4308 17.1413 30.4841 17.2747 30.4841 17.456C30.4841 17.6267 30.4308 17.76 30.3241 17.856C30.2175 17.952 30.0681 18 29.8761 18H23.8921ZM35.7371 18.08C35.5345 18.08 35.3691 18.0213 35.2411 17.904C35.1238 17.776 35.0651 17.6107 35.0651 17.408V7.84H31.6251C31.4331 7.84 31.2838 7.792 31.1771 7.696C31.0705 7.6 31.0171 7.46133 31.0171 7.28C31.0171 7.09867 31.0705 6.96 31.1771 6.864C31.2838 6.768 31.4331 6.72 31.6251 6.72H39.8331C40.0251 6.72 40.1745 6.768 40.2811 6.864C40.3878 6.96 40.4411 7.09867 40.4411 7.28C40.4411 7.46133 40.3878 7.6 40.2811 7.696C40.1745 7.792 40.0251 7.84 39.8331 7.84H36.3931V17.408C36.3931 17.6107 36.3345 17.776 36.2171 17.904C36.0998 18.0213 35.9398 18.08 35.7371 18.08ZM50.2915 17.248C50.3342 17.3333 50.3555 17.424 50.3555 17.52C50.3555 17.68 50.2915 17.8133 50.1635 17.92C50.0462 18.0267 49.9022 18.08 49.7315 18.08C49.4648 18.08 49.2782 17.952 49.1715 17.696L48.0355 15.104H42.0035L40.8515 17.696C40.7448 17.952 40.5582 18.08 40.2915 18.08C40.1208 18.08 39.9715 18.0267 39.8435 17.92C39.7155 17.8027 39.6515 17.664 39.6515 17.504C39.6515 17.4187 39.6728 17.3333 39.7155 17.248L44.2915 7.072C44.3555 6.92267 44.4515 6.81067 44.5795 6.736C44.7075 6.66133 44.8462 6.624 44.9955 6.624C45.1555 6.624 45.2995 6.66667 45.4275 6.752C45.5555 6.82667 45.6515 6.93333 45.7155 7.072L50.2915 17.248ZM42.4835 14.016H47.5555L45.0115 8.272L42.4835 14.016ZM52.8605 18.08C52.6578 18.08 52.4978 18.0213 52.3805 17.904C52.2632 17.776 52.2045 17.6107 52.2045 17.408V7.312C52.2045 7.10933 52.2632 6.94933 52.3805 6.832C52.4978 6.704 52.6578 6.64 52.8605 6.64C53.0632 6.64 53.2232 6.704 53.3405 6.832C53.4578 6.94933 53.5165 7.10933 53.5165 7.312V17.408C53.5165 17.6107 53.4578 17.776 53.3405 17.904C53.2232 18.0213 53.0632 18.08 52.8605 18.08ZM56.9383 18C56.7569 18 56.6023 17.9467 56.4743 17.84C56.3569 17.7227 56.2983 17.5733 56.2983 17.392V7.312C56.2983 7.10933 56.3569 6.94933 56.4743 6.832C56.5916 6.704 56.7516 6.64 56.9543 6.64C57.1569 6.64 57.3169 6.704 57.4343 6.832C57.5516 6.94933 57.6103 7.10933 57.6103 7.312V16.88H62.7783C62.9703 16.88 63.1196 16.928 63.2263 17.024C63.3329 17.12 63.3863 17.2587 63.3863 17.44C63.3863 17.6213 63.3329 17.76 63.2263 17.856C63.1196 17.952 62.9703 18 62.7783 18H56.9383ZM68.2733 18.128C67.4733 18.128 66.7053 18.0107 65.9693 17.776C65.2439 17.5307 64.6626 17.2053 64.2253 16.8C64.0653 16.6507 63.9853 16.464 63.9853 16.24C63.9853 16.0907 64.0279 15.9627 64.1133 15.856C64.1986 15.7387 64.2999 15.68 64.4173 15.68C64.5559 15.68 64.7053 15.7387 64.8653 15.856C65.8573 16.624 66.9879 17.008 68.2573 17.008C69.1746 17.008 69.8786 16.832 70.3693 16.48C70.8599 16.128 71.1053 15.6267 71.1053 14.976C71.1053 14.6027 70.9879 14.304 70.7533 14.08C70.5186 13.8453 70.2093 13.6587 69.8253 13.52C69.4413 13.3813 68.9239 13.2373 68.2733 13.088C67.3986 12.8853 66.6786 12.672 66.1133 12.448C65.5586 12.224 65.1053 11.904 64.7533 11.488C64.4119 11.072 64.2413 10.528 64.2413 9.856C64.2413 9.216 64.4119 8.65067 64.7533 8.16C65.1053 7.65867 65.5906 7.27467 66.2093 7.008C66.8386 6.73067 67.5533 6.592 68.3533 6.592C69.0999 6.592 69.7933 6.70933 70.4333 6.944C71.0839 7.168 71.6279 7.49333 72.0653 7.92C72.2359 8.09067 72.3212 8.27733 72.3212 8.48C72.3212 8.62933 72.2786 8.76267 72.1933 8.88C72.1079 8.98667 72.0066 9.04 71.8893 9.04C71.7719 9.04 71.6173 8.98133 71.4253 8.864C70.9026 8.43733 70.4173 8.13867 69.9693 7.968C69.5213 7.79733 68.9826 7.712 68.3533 7.712C67.4679 7.712 66.7799 7.89867 66.2893 8.272C65.7986 8.63467 65.5533 9.14667 65.5533 9.808C65.5533 10.3733 65.7666 10.8 66.1933 11.088C66.6306 11.3653 67.2973 11.6107 68.1933 11.824C69.1639 12.0587 69.9266 12.2773 70.4813 12.48C71.0359 12.672 71.4946 12.9653 71.8573 13.36C72.2306 13.7547 72.4173 14.2827 72.4173 14.944C72.4173 15.5733 72.2413 16.128 71.8893 16.608C71.5479 17.088 71.0626 17.4613 70.4333 17.728C69.8039 17.9947 69.0839 18.128 68.2733 18.128Z" fill="#EE9F46"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M101.748 18V20H87.9554V18H101.748ZM104.703 14V16H85V14H104.703ZM101.748 10V12H87.9554V10H101.748ZM104.703 6V8H85V6H104.703Z" fill="#FFAB4C"/>
                    </svg>
                </div>
        </div>
    )
}

export default Student