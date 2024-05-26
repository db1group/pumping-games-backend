export default interface Queue {
  connect(): Promise<void>;
  publish(exchangeName: string, data: any): Promise<void>;
  consume(queueName: string, callback: any): Promise<void>;
}
