import { React, useEffect, useCallback, useState } from "react";
import { Progress, Tabs } from 'antd';
import UserInfos from "../components/shared/user";
import { sendGet, ROUTES } from "../services/backendRoutes";

const UserEmotions = () => {
  const [emotions, setEmotions] = useState({})
  const labelList = ["by week", "by month", "by year"]

  const onChange = (key) => {
    console.log(key);
  };

  const renderEmotions = useCallback(async () => {
    await sendGet(`${ROUTES.emotions}`).then((response) => {
      setEmotions(response.data)
      console.log(response.data)
      console.log("emotions", emotions)
    })
  })

  useEffect(() => {
    renderEmotions()
  }, [])


  return (
    <section className="user-emotions">
      {/* <Tabs
        onChange={onChange}
        type="card"
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab Pane ${id}`,
          };
        })}
      /> */}
      <UserInfos />
      <span>
        {
          emotions.map((emotion, i) =>{
            return(
              <div key={i}>{emotion.description.split(" , ")}</div>
            )
          })
        }
        <Progress type="dashboard" percent={100} />
        <Progress type="dashboard" percent={75} gapDegree={10} />
        
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </span>
    </section>
  )
}

export default UserEmotions