import { Kafka } from 'kafkajs';
import { v4 as uuidv4 } from 'uuid';

export const produceMessage = async (topic, value) => {
  const kafka = new Kafka({
    clientId: 'kafka_client-augi_ betest',
    brokers: [process.env.BROKER],
  });

  const producer = kafka.producer();

  try {
    await producer.connect();
  } catch (error) {
    console.error('Kafka Producer Connect Failed');
    console.error(error);
  }

  try {
    await producer.send({
      topic,
      messages: [{ key: uuidv4(), value: JSON.stringify(value) }],
    });
  } catch (error) {
    console.error('Failed Produce Message');
    console.error(error);
  }

  await producer.disconnect();
};
