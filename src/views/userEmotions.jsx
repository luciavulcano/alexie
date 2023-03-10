import { React, useEffect, useCallback, useState } from "react";
import { Progress, Row, Col, Typography } from 'antd';
import UserInfos from "../components/shared/user";
import { sendGet, ROUTES } from "../services/backendRoutes";

const UserEmotions = () => {
  const [emotions, setEmotions] = useState({});
  const [habits, setHabits] = useState({});
  const [events, setEvents] = useState({});
  const [health, setHealth] = useState({});
  const { Title } = Typography;



  const renderEmotions = useCallback(async () => {
    await sendGet(`${ROUTES.emotionsLog}`).then((response) => {
      const arrEmo = response.data;
      let result = {};
      for (const emo of arrEmo) {
        emo.created_in = emo.created_in.slice(0, 10)
        if (!(emo.created_in in result)) {
          result[emo.created_in] = {
            [emo.emotion.description]: 1
          }
        } else {
          if (emo.emotion.description in result[emo.created_in]) {
            result[emo.created_in][emo.emotion.description] += 1
          } else {
            result[emo.created_in][emo.emotion.description] = 1
          }
        }
      }
      setEmotions(result)
    })
    await sendGet(`${ROUTES.habitsLog}`).then((response) => {
      const arr = response.data
      let result = {}
      for (const hab of arr) {
        hab.created_in = hab.created_in.slice(0, 10)
        if (!(hab.created_in in result)) {
          result[hab.created_in] = {
            [hab.habit.description]: 0
          }
        } else {
          if (hab.habit.description in result[hab.created_in]) {
            result[hab.created_in][hab.habit.description] += 1
          } else {
            result[hab.created_in][hab.habit.description] = 0
          }
        }
      }
      setHabits(result)
    })
    await sendGet(`${ROUTES.eventsLog}`).then((response) => {
      const arr = response.data
      let result = {}
      for (const eve of arr) {
        eve.created_in = eve.created_in.slice(0, 10)
        if (!(eve.created_in in result)) {
          result[eve.created_in] = {
            [eve.event.description]: 0
          }
        } else {
          if (eve.event.description in result[eve.created_in]) {
            result[eve.created_in][eve.event.description] += 1
          } else {
            result[eve.created_in][eve.event.description] = 0
          }
        }
      }
      setEvents(result)
    })
    await sendGet(`${ROUTES.healthLog}`).then((response) => {
      const arr = response.data
      let result = {}
      for (const htl of arr) {
        htl.created_in = htl.created_in.slice(0, 10)
        if (!(htl.created_in in result)) {
          result[htl.created_in] = {
            [htl.health.description]: 0
          }
        } else {
          if (htl.health.description in result[htl.created_in]) {
            result[htl.created_in][htl.health.description] += 1
          } else {
            result[htl.created_in][htl.health.description] = 0
          }
        }
      }
      setHealth(result)
    })
  }, [setEmotions])

  const sumEmotions = (emotion) => {
    let result = 0
    for (const date of Object.keys(emotions)) {
      if (emotion in emotions[date]) {
        result += emotions[date][emotion]
      }
    }
    return result
  }

  const anger = sumEmotions("anger")
  const boredom = sumEmotions("boredom")
  const tired = sumEmotions("tired")
  const happiness = sumEmotions("happiness")
  const confusion = sumEmotions("confusion")
  const fear = sumEmotions("fear")
  const lonely = sumEmotions("lonely")
  const pain = sumEmotions("pain")


  useEffect(() => {
    renderEmotions()
  }, []);

  return (
    <section className="user-emotions">
      <UserInfos />
      <div className="user-emotions__box">
        <span className="user-emotions__span">
          <div>
            <Row>
              <Col span={24}>
                <Title level={4}>emotions</Title>
              </Col>
            </Row>
            <Row>
              {Object.keys(emotions).map((date) => {
                return Object.keys(emotions[date]).map((emo, i) => {
                  return (
                    <Col span={4}>
                      <h1>{emo}</h1>
                      <Progress
                        type="circle"
                        percent={(emotions[date][emo] / Object.keys(emotions).length * 100).toFixed(2)}
                        format={(percent) => `${percent}%`}
                      />
                    </Col>
                  )
                })
              })}
            </Row>
          </div>
          <div>
            <Row>
              <Col span={24}>
                <Title level={4}>habits</Title>
              </Col>
            </Row>
            <Row>
              {Object.keys(habits).map((date) => {
                return Object.keys(habits[date]).map((hab, i) => {
                  return (
                    <Col span={24}>
                      <h1>{hab}</h1>
                      <Progress
                        size="small"
                        percent={(habits[date][hab] / Object.keys(habits).length * 100).toFixed(2)}
                        format={(percent) => `${percent}%`}
                      />
                    </Col>
                  )
                })
              })}
            </Row>
          </div>
        </span>
        <span className="user-emotions__span">
          <Row>
            {Object.keys(events).map((date) => {
              return Object.keys(events[date]).map((ev, i) => {
                return (
                  <Col span={12}>
                    <h1>{ev}</h1>
                    <Progress
                      size="small"
                      percent={(events[date][ev] / Object.keys(events).length * 100).toFixed(2)}
                      format={(percent) => `${percent}%`}
                    />
                  </Col>
                )
              })
            })}
          </Row>
          <Row>
            {Object.keys(health).map((date) => {
              return Object.keys(health[date]).map((hea, i) => {
                return (
                  <Col span={6}>
                    <h1>{hea}</h1>
                    <Progress
                      size="small"
                      percent={(health[date][hea] / Object.keys(health).length * 100).toFixed(2)}
                      format={(percent) => `${percent}%`}
                    />
                  </Col>
                )
              })
            })}
          </Row>
        </span>

      </div>
    </section>
  )
}

export default UserEmotions