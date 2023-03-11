import { React, useEffect, useCallback, useState } from "react";
import { Progress, Row, Col, Typography, Space } from 'antd';
import UserInfos from "../components/shared/user";
import { sendGet, ROUTES } from "../services/backendRoutes";

const UserEmotions = () => {
  const [emotions, setEmotions] = useState({});
  const [habits, setHabits] = useState({});
  const [events, setEvents] = useState({});
  const [health, setHealth] = useState({});
  const { Title, Text } = Typography;

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
            [hab.habit.description]: 1
          }
        } else {
          if (hab.habit.description in result[hab.created_in]) {
            result[hab.created_in][hab.habit.description] += 1
          } else {
            result[hab.created_in][hab.habit.description] = 1
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
            [eve.event.description]: 1
          }
        } else {
          if (eve.event.description in result[eve.created_in]) {
            result[eve.created_in][eve.event.description] += 1
          } else {
            result[eve.created_in][eve.event.description] = 1
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
            [htl.health.description]: 1
          }
        } else {
          if (htl.health.description in result[htl.created_in]) {
            result[htl.created_in][htl.health.description] += 1
          } else {
            result[htl.created_in][htl.health.description] = 1
          }
        }
      }
      setHealth(result)
    })
  }, [setEmotions]);

  const sumEmotions = (emotion) => {
    let result = 0
    for (const date of Object.keys(emotions)) {
      if (emotion in emotions[date]) {
        result += emotions[date][emotion]
      }
    }
    return result
  };

  const anger = sumEmotions("anger");
  const boredom = sumEmotions("boredom");
  const tired = sumEmotions("tired");
  const happiness = sumEmotions("happiness");
  const confusion = sumEmotions("confusion");
  const fear = sumEmotions("fear");
  const lonely = sumEmotions("lonely");
  const pain = sumEmotions("pain");

  const sumHabits = (habit) => {
    let result = 0
    for (const date of Object.keys(habits)) {
      if (habit in habits[date]) {
        result += habits[date][habit]
      }
    }
    return result
  };

  const exercised = sumHabits("exercised");
  const slept = sumHabits("slept");
  const ateHealthy = sumHabits("ate healthy");
  const socialized = sumHabits("socialized");
  const hobbie = sumHabits("hobbie");
  const drankWater = sumHabits("drank water");
  const showered = sumHabits("showered");

  const sumEvents = (event) => {
    let result = 0
    for (const date of Object.keys(events)) {
      if (event in events[date]) {
        result += events[date][event]
      }
    }
    return result
  };

  const meltdown = sumEvents("did i had a meltdown?");
  const identify = sumEvents("was I able to identify something that was bottering me?");

  const sumHealth = (hea) => {
    let result = 0
    for (const date of Object.keys(health)) {
      if (hea in health[date]) {
        result += health[date][hea]
      }
    }
    return result
  };

  const headache = sumHealth("headache");
  const burnout = sumHealth("burnout");
  const repetitiveThoughts = sumHealth("repetitive thoughts");
  const cramps = sumHealth("cramps");
  const feelingSick = sumHealth("feeling sick");
  const backPain = sumHealth("back pain");


  useEffect(() => {
    renderEmotions()
  }, []);

  return (
    <section className="user-emotions">
      <UserInfos />
      <div className="user-emotions__box">
        <span className="user-emotions__span">
          <div className="user-emotions__span__box">
            <Row>
              <Col span={24}>
                <Title level={4}>emotions</Title>
              </Col>
            </Row>
            <Row className="user-emotions__span__box__row">
              <Col span={24} className="user-emotions__col">
                <div className="user-emotions__col__progress">
                  <Text>anger</Text>
                  <Progress
                    type="circle"
                    size={5}
                    percent={(anger / Object.keys(emotions).length * 100).toFixed(0)}
                    format={(percent) => `${percent}%`}
                  />
                </div>
                <div className="user-emotions__col__progress">
                  <Text>boredom</Text>
                  <Progress
                    type="circle"
                    size={5}
                    percent={(boredom / Object.keys(emotions).length * 100).toFixed(0)}
                    format={(percent) => `${percent}%`}
                  />

                </div>
                <div className="user-emotions__col__progress">
                  <Text>tired</Text>
                  <Progress
                    type="circle"
                    size={5}
                    percent={(tired / Object.keys(emotions).length * 100).toFixed(0)}
                    format={(percent) => `${percent}%`}
                  />
                </div>
                <div className="user-emotions__col__progress">
                  <Text>happiness</Text>
                  <Progress
                    type="circle"
                    size={5}
                    percent={(happiness / Object.keys(emotions).length * 100).toFixed(0)}
                    format={(percent) => `${percent}%`}
                  />
                </div>
              </Col>
              <Col span={24} className="user-emotions__col">
                <div className="user-emotions__col__progress">
                  <Text>confusion</Text>
                  <Progress
                    type="circle"
                    size={5}
                    percent={(confusion / Object.keys(emotions).length * 100).toFixed(0)}
                    format={(percent) => `${percent}%`}
                  />
                </div>
                <div className="user-emotions__col__progress">
                  <Text>fear</Text>
                  <Progress
                    type="circle"
                    size={5}
                    percent={(fear / Object.keys(emotions).length * 100).toFixed(0)}
                    format={(percent) => `${percent}%`}
                  />
                </div>
                <div className="user-emotions__col__progress">
                  <Text>lonely</Text>
                  <Progress
                    type="circle"
                    size={5}
                    percent={(lonely / Object.keys(emotions).length * 100).toFixed(0)}
                    format={(percent) => `${percent}%`}
                  />
                </div>
                <div className="user-emotions__col__progress">
                  <Text>pain</Text>
                  <Progress
                    type="circle"
                    percent={(pain / Object.keys(emotions).length * 100).toFixed(0)}
                    format={(percent) => `${percent}%`}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="user-emotions__span__box">
            <Row>
              <Col span={24}>
                <Title level={4}>habits</Title>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Text>exercised</Text>
                <Progress
                  percent={(exercised / Object.keys(habits).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                />
              </Col>
              <Col span={24}>
                <Text>slept</Text>
                <Progress
                  percent={(slept / Object.keys(habits).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                />
              </Col>
              <Col span={24}>
                <Text>ate healthy</Text>
                <Progress
                  percent={(ateHealthy / Object.keys(habits).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                />
              </Col>
              <Col span={24}>
                <Text>socialized</Text>
                <Progress
                  percent={(socialized / Object.keys(habits).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                />
              </Col>
              <Col span={24}>
                <Text>hobbie</Text>
                <Progress
                  percent={(hobbie / Object.keys(habits).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                />
              </Col>
              <Col span={24}>
                <Text>drank water</Text>
                <Progress
                  percent={(drankWater / Object.keys(habits).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                />
              </Col>
              <Col span={24}>
                <Text>showered</Text>
                <Progress
                  percent={(showered / Object.keys(habits).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                />
              </Col>
            </Row>
          </div>
        </span>
        <span className="user-emotions__span">
          <div className="user-emotions__span__box">
            <Row>
              <Col span={24}>
                <Title level={4}>events</Title>
              </Col>
            </Row>
            <Row className="user-emotions__span__row">
              <Col span={24}>
                <Text>did i had a meltdown?</Text>
                <Progress
                  percent={(meltdown / Object.keys(events).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                  size={[300, 20]}
                />
              </Col>
              <Col span={24}>
                <Text>was I able to identify something that was bottering me?</Text>
                <Progress
                  percent={(identify / Object.keys(events).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                  size={[300, 20]}
                />
              </Col>
            </Row>
          </div>
          <div className="user-emotions__span__box">
            <Row>
              <Col span={24}>
                <Title level={4}>health</Title>
              </Col>
            </Row>
            <Row>
              <Col span={24} >
                <Text>headache</Text>
                <Progress
                  percent={(headache / Object.keys(health).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                  size="small"
                />
              </Col>
              <Col span={24} >
                <Text>burnout</Text>
                <Progress
                  percent={(burnout / Object.keys(health).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                  size="small"
                />
              </Col>
              <Col span={24} >
                <Text>repetitive thoughts</Text>
                <Progress
                  percent={(repetitiveThoughts / Object.keys(health).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                  size="small"
                />
              </Col>
              <Col span={24} >
                <Text>cramps</Text>
                <Progress
                  percent={(cramps / Object.keys(health).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                  size="small"
                />
              </Col>
              <Col span={24} >
                <Text>feeling sick</Text>
                <Progress
                  percent={(feelingSick / Object.keys(health).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                  size="small"
                />
              </Col>
              <Col span={24} >
                <Text>back pain</Text>
                <Progress
                  percent={(backPain / Object.keys(health).length * 100).toFixed(0)}
                  format={(percent) => `${percent}%`}
                  size="small"
                />
              </Col>
            </Row>
          </div>
        </span>

      </div>
    </section>
  )
}

export default UserEmotions