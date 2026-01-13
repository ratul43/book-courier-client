import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  // console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
          Swal.fire({
      title: "Success!",
      text: "You can go my orders page to show your order status",
      icon: "success"
    });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h2 className="text-4xl">Payment successful</h2>
      <p>Your TransactionId: {paymentInfo?.transactionId}</p>
      <p>Your Parcel Tracking Id: {paymentInfo?.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
