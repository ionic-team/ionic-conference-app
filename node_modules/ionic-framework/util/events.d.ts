/**
 * Events is a pub/sub style event system for sending and responding to application-level
 * events across your app.
 * @usage
 * ```ts
 * // first page (publish an event when a user is created)
 * function createUser(user) {
 *   console.log('User created!')
 *   events.publish('user:created', user);
 * }
 *
 * // second page (listen for the user created event)
 * events.subscribe('user:created', (user) => {
 *   console.log('Welcome', user);
 * });
 *
 * ```
 */
export declare class Events {
    constructor();
    /**
     * Subscribe to an event topic. Events that get posted to that topic
     * will trigger the provided handler.
     *
     * @param topic the topic to subscribe to
     * @param handler the event handler
     */
    subscribe(topic: any, ...handlers: any[]): void;
    /**
     * Unsubscribe from the given topic. Your handler will
     * no longer receive events published to this topic.
     *
     * @param topic the topic to unsubscribe from
     * @param handler the event handler
     *
     * @return true if a handler was removed
     */
    unsubscribe(topic: any, handler: any): boolean;
    /**
     * Publish an event to the given topic.
     *
     * @param topic the topic to publish to
     * @param eventData the data to send as the event
     */
    publish(topic: any, ...args: any[]): any[];
}
