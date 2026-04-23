module.exports = [
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/setup/async_local_storage.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initializeAsyncLocalStorageSingleton",
    ()=>initializeAsyncLocalStorageSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$async_hooks__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
;
;
//#region src/setup/async_local_storage.ts
function initializeAsyncLocalStorageSingleton() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].initializeGlobalInstance(new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$async_hooks__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__["AsyncLocalStorage"]());
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CACHE_NS_WRITES",
    ()=>CACHE_NS_WRITES,
    "COMMAND_SYMBOL",
    ()=>COMMAND_SYMBOL,
    "CONFIG_KEY_ABORT_SIGNALS",
    ()=>CONFIG_KEY_ABORT_SIGNALS,
    "CONFIG_KEY_CALL",
    ()=>CONFIG_KEY_CALL,
    "CONFIG_KEY_CHECKPOINTER",
    ()=>CONFIG_KEY_CHECKPOINTER,
    "CONFIG_KEY_CHECKPOINT_ID",
    ()=>CONFIG_KEY_CHECKPOINT_ID,
    "CONFIG_KEY_CHECKPOINT_MAP",
    ()=>CONFIG_KEY_CHECKPOINT_MAP,
    "CONFIG_KEY_CHECKPOINT_NS",
    ()=>CONFIG_KEY_CHECKPOINT_NS,
    "CONFIG_KEY_DURABILITY",
    ()=>CONFIG_KEY_DURABILITY,
    "CONFIG_KEY_NODE_FINISHED",
    ()=>CONFIG_KEY_NODE_FINISHED,
    "CONFIG_KEY_PREVIOUS_STATE",
    ()=>CONFIG_KEY_PREVIOUS_STATE,
    "CONFIG_KEY_READ",
    ()=>CONFIG_KEY_READ,
    "CONFIG_KEY_RESUME_MAP",
    ()=>CONFIG_KEY_RESUME_MAP,
    "CONFIG_KEY_RESUMING",
    ()=>CONFIG_KEY_RESUMING,
    "CONFIG_KEY_SCRATCHPAD",
    ()=>CONFIG_KEY_SCRATCHPAD,
    "CONFIG_KEY_SEND",
    ()=>CONFIG_KEY_SEND,
    "CONFIG_KEY_STREAM",
    ()=>CONFIG_KEY_STREAM,
    "CONFIG_KEY_TASK_ID",
    ()=>CONFIG_KEY_TASK_ID,
    "COPY",
    ()=>COPY,
    "Command",
    ()=>Command,
    "CommandInstance",
    ()=>CommandInstance,
    "END",
    ()=>END,
    "ERROR",
    ()=>ERROR,
    "INPUT",
    ()=>INPUT,
    "INTERRUPT",
    ()=>INTERRUPT,
    "NO_WRITES",
    ()=>NO_WRITES,
    "NULL_TASK_ID",
    ()=>NULL_TASK_ID,
    "Overwrite",
    ()=>Overwrite,
    "PREVIOUS",
    ()=>PREVIOUS,
    "PULL",
    ()=>PULL,
    "PUSH",
    ()=>PUSH,
    "RESERVED",
    ()=>RESERVED,
    "RESUME",
    ()=>RESUME,
    "RETURN",
    ()=>RETURN,
    "SELF",
    ()=>SELF,
    "START",
    ()=>START,
    "Send",
    ()=>Send,
    "TAG_HIDDEN",
    ()=>TAG_HIDDEN,
    "TAG_NOSTREAM",
    ()=>TAG_NOSTREAM,
    "TASKS",
    ()=>TASKS,
    "_getOverwriteValue",
    ()=>_getOverwriteValue,
    "_isOverwriteValue",
    ()=>_isOverwriteValue,
    "_isSend",
    ()=>_isSend,
    "_isSendInterface",
    ()=>_isSendInterface,
    "isCommand",
    ()=>isCommand,
    "isInterrupted",
    ()=>isInterrupted
]);
//#region src/constants.ts
/** Special reserved node name denoting the start of a graph. */ const START = "__start__";
/** Special reserved node name denoting the end of a graph. */ const END = "__end__";
const INPUT = "__input__";
const COPY = "__copy__";
const ERROR = "__error__";
/** Special reserved cache namespaces */ const CACHE_NS_WRITES = "__pregel_ns_writes";
const CONFIG_KEY_SEND = "__pregel_send";
/** config key containing function used to call a node (push task) */ const CONFIG_KEY_CALL = "__pregel_call";
const CONFIG_KEY_READ = "__pregel_read";
const CONFIG_KEY_CHECKPOINTER = "__pregel_checkpointer";
const CONFIG_KEY_RESUMING = "__pregel_resuming";
const CONFIG_KEY_TASK_ID = "__pregel_task_id";
const CONFIG_KEY_STREAM = "__pregel_stream";
const CONFIG_KEY_RESUME_VALUE = "__pregel_resume_value";
const CONFIG_KEY_RESUME_MAP = "__pregel_resume_map";
const CONFIG_KEY_SCRATCHPAD = "__pregel_scratchpad";
/** config key containing state from previous invocation of graph for the given thread */ const CONFIG_KEY_PREVIOUS_STATE = "__pregel_previous";
const CONFIG_KEY_DURABILITY = "__pregel_durability";
const CONFIG_KEY_CHECKPOINT_ID = "checkpoint_id";
const CONFIG_KEY_CHECKPOINT_NS = "checkpoint_ns";
const CONFIG_KEY_NODE_FINISHED = "__pregel_node_finished";
const CONFIG_KEY_CHECKPOINT_MAP = "checkpoint_map";
const CONFIG_KEY_ABORT_SIGNALS = "__pregel_abort_signals";
/** Special channel reserved for graph interrupts */ const INTERRUPT = "__interrupt__";
/** Special channel reserved for graph resume */ const RESUME = "__resume__";
/** Special channel reserved for cases when a task exits without any writes */ const NO_WRITES = "__no_writes__";
/** Special channel reserved for graph return */ const RETURN = "__return__";
/** Special channel reserved for graph previous state */ const PREVIOUS = "__previous__";
const TAG_HIDDEN = "langsmith:hidden";
const TAG_NOSTREAM = "langsmith:nostream";
const SELF = "__self__";
const TASKS = "__pregel_tasks";
const PUSH = "__pregel_push";
const PULL = "__pregel_pull";
const NULL_TASK_ID = "00000000-0000-0000-0000-000000000000";
const RESERVED = [
    TAG_HIDDEN,
    INPUT,
    INTERRUPT,
    RESUME,
    ERROR,
    NO_WRITES,
    CONFIG_KEY_SEND,
    CONFIG_KEY_READ,
    CONFIG_KEY_CHECKPOINTER,
    CONFIG_KEY_DURABILITY,
    CONFIG_KEY_STREAM,
    CONFIG_KEY_RESUMING,
    CONFIG_KEY_TASK_ID,
    CONFIG_KEY_CALL,
    CONFIG_KEY_RESUME_VALUE,
    CONFIG_KEY_SCRATCHPAD,
    CONFIG_KEY_PREVIOUS_STATE,
    CONFIG_KEY_CHECKPOINT_MAP,
    CONFIG_KEY_CHECKPOINT_NS,
    CONFIG_KEY_CHECKPOINT_ID
];
/**
* Symbol used internally to identify Command instances.
* Exported to support cross-version type compatibility.
* @internal
*/ const COMMAND_SYMBOL = Symbol.for("langgraph.command");
/**
* Instance of a {@link Command} class.
*
* This is used to avoid IntelliSense suggesting public fields
* of {@link Command} class when a plain object is expected.
*
* @see {@link Command}
* @internal
*/ var CommandInstance = class {
    [COMMAND_SYMBOL];
    constructor(args){
        this[COMMAND_SYMBOL] = args;
    }
};
function _isSendInterface(x) {
    const operation = x;
    return operation !== null && operation !== void 0 && typeof operation.node === "string" && operation.args !== void 0;
}
/**
*
* A message or packet to send to a specific node in the graph.
*
* The `Send` class is used within a `StateGraph`'s conditional edges to
* dynamically invoke a node with a custom state at the next step.
*
* Importantly, the sent state can differ from the core graph's state,
* allowing for flexible and dynamic workflow management.
*
* One such example is a "map-reduce" workflow where your graph invokes
* the same node multiple times in parallel with different states,
* before aggregating the results back into the main graph's state.
*
* @example
* ```typescript
* import { Annotation, Send, StateGraph } from "@langchain/langgraph";
*
* const ChainState = Annotation.Root({
*   subjects: Annotation<string[]>,
*   jokes: Annotation<string[]>({
*     reducer: (a, b) => a.concat(b),
*   }),
* });
*
* const continueToJokes = async (state: typeof ChainState.State) => {
*   return state.subjects.map((subject) => {
*     return new Send("generate_joke", { subjects: [subject] });
*   });
* };
*
* const graph = new StateGraph(ChainState)
*   .addNode("generate_joke", (state) => ({
*     jokes: [`Joke about ${state.subjects}`],
*   }))
*   .addConditionalEdges("__start__", continueToJokes)
*   .addEdge("generate_joke", "__end__")
*   .compile();
*
* const res = await graph.invoke({ subjects: ["cats", "dogs"] });
* console.log(res);
*
* // Invoking with two subjects results in a generated joke for each
* // { subjects: ["cats", "dogs"], jokes: [`Joke about cats`, `Joke about dogs`] }
* ```
*/ var Send = class {
    lg_name = "Send";
    node;
    args;
    constructor(node, args){
        this.node = node;
        this.args = _deserializeCommandSendObjectGraph(args);
    }
    toJSON() {
        return {
            lg_name: this.lg_name,
            node: this.node,
            args: this.args
        };
    }
};
function _isSend(x) {
    return x instanceof Send;
}
const OVERWRITE = "__overwrite__";
/**
* Bypass a reducer and write the wrapped value directly to a
* {@link BinaryOperatorAggregate} channel.
*
* Receiving multiple `Overwrite` values for the same channel in a single
* super-step will raise an {@link InvalidUpdateError}.
*
* @example
* ```typescript
* import { Annotation, StateGraph, Overwrite } from "@langchain/langgraph";
*
* const State = Annotation.Root({
*   messages: Annotation<string[]>({
*     reducer: (a, b) => a.concat(b),
*     default: () => [],
*   }),
* });
*
* const replaceMessages = (_state: typeof State.State) => {
*   return { messages: new Overwrite(["replacement"]) };
* };
* ```
*/ var Overwrite = class {
    lg_name = "Overwrite";
    [OVERWRITE];
    constructor(value){
        this[OVERWRITE] = value;
    }
    get value() {
        return this[OVERWRITE];
    }
    toJSON() {
        return {
            [OVERWRITE]: this[OVERWRITE]
        };
    }
    static isInstance(value) {
        if (!value || typeof value !== "object") return false;
        if ("__overwrite__" in value) return true;
        if ("lg_name" in value && value.lg_name === "Overwrite") return true;
        return false;
    }
};
/**
* Helper function to detect and extract the value from an Overwrite wrapper,
* supporting both the Overwrite class instance and the serialized object format.
*
* Use to check if a provided value represents an Overwrite: returns the
* unwrapped value if so, or undefined otherwise.
*
* - If the value is an Overwrite instance (preferred API), return its `.value`.
* - If the value is a wire-format object ({ [OVERWRITE]: value }), extract it.
* - Otherwise, returns undefined.
*
* @template ValueType - The expected type of the Overwrite value.
* @param value - The value to check (may be anything).
* @returns The unwrapped value if value is an Overwrite, or undefined otherwise.
* @internal
*/ function _getOverwriteValue(value) {
    if (typeof value === "object" && value !== null && "__overwrite__" in value) return [
        true,
        value[OVERWRITE]
    ];
    return [
        false,
        void 0
    ];
}
/**
* Type guard to check if a value is an Overwrite value -- either the class
* instance or the wire format object.
*
* @template ValueType - The expected type of the Overwrite value.
* @param value - The value to check (may be anything).
* @returns `true` if the value is an Overwrite value, `false` otherwise.
* @internal
*/ function _isOverwriteValue(value) {
    return _getOverwriteValue(value)[0];
}
/**
* Checks if the given graph invoke / stream chunk contains interrupt.
*
* @example
* ```ts
* import { INTERRUPT, isInterrupted } from "@langchain/langgraph";
*
* const values = await graph.invoke({ foo: "bar" });
* if (isInterrupted<string>(values)) {
*   const interrupt = values[INTERRUPT][0].value;
* }
* ```
*
* @param values - The values to check.
* @returns `true` if the values contain an interrupt, `false` otherwise.
*/ function isInterrupted(values) {
    if (!values || typeof values !== "object") return false;
    if (!("__interrupt__" in values)) return false;
    return Array.isArray(values[INTERRUPT]);
}
/**
* One or more commands to update the graph's state and send messages to nodes.
* Can be used to combine routing logic with state updates in lieu of conditional edges
*
* @example
* ```ts
* import { Annotation, Command } from "@langchain/langgraph";
*
* // Define graph state
* const StateAnnotation = Annotation.Root({
*   foo: Annotation<string>,
* });
*
* // Define the nodes
* const nodeA = async (_state: typeof StateAnnotation.State) => {
*   console.log("Called A");
*   // this is a replacement for a real conditional edge function
*   const goto = Math.random() > .5 ? "nodeB" : "nodeC";
*   // note how Command allows you to BOTH update the graph state AND route to the next node
*   return new Command({
*     // this is the state update
*     update: {
*       foo: "a",
*     },
*     // this is a replacement for an edge
*     goto,
*   });
* };
*
* // Nodes B and C are unchanged
* const nodeB = async (state: typeof StateAnnotation.State) => {
*   console.log("Called B");
*   return {
*     foo: state.foo + "|b",
*   };
* }
*
* const nodeC = async (state: typeof StateAnnotation.State) => {
*   console.log("Called C");
*   return {
*     foo: state.foo + "|c",
*   };
* }
* 
* import { StateGraph } from "@langchain/langgraph";

* // NOTE: there are no edges between nodes A, B and C!
* const graph = new StateGraph(StateAnnotation)
*   .addNode("nodeA", nodeA, {
*     ends: ["nodeB", "nodeC"],
*   })
*   .addNode("nodeB", nodeB)
*   .addNode("nodeC", nodeC)
*   .addEdge("__start__", "nodeA")
*   .compile();
* 
* await graph.invoke({ foo: "" });
*
* // Randomly oscillates between
* // { foo: 'a|c' } and { foo: 'a|b' }
* ```
*/ var Command = class extends CommandInstance {
    lg_name = "Command";
    lc_direct_tool_output = true;
    /**
	* Graph to send the command to. Supported values are:
	*   - None: the current graph (default)
	*   - The specific name of the graph to send the command to
	*   - {@link Command.PARENT}: closest parent graph (only supported when returned from a node in a subgraph)
	*/ graph;
    /**
	* Update to apply to the graph's state as a result of executing the node that is returning the command.
	* Written to the state as if the node had simply returned this value instead of the Command object.
	*/ update;
    /**
	* Value to resume execution with. To be used together with {@link interrupt}.
	*/ resume;
    /**
	* Can be one of the following:
	*   - name of the node to navigate to next (any node that belongs to the specified `graph`)
	*   - sequence of node names to navigate to next
	*   - {@link Send} object (to execute a node with the exact input provided in the {@link Send} object)
	*   - sequence of {@link Send} objects
	*/ goto = [];
    static PARENT = "__parent__";
    constructor(args){
        super(args);
        this.resume = args.resume;
        this.graph = args.graph;
        this.update = args.update;
        if (args.goto) this.goto = Array.isArray(args.goto) ? _deserializeCommandSendObjectGraph(args.goto) : [
            _deserializeCommandSendObjectGraph(args.goto)
        ];
    }
    /**
	* Convert the update field to a list of {@link PendingWrite} tuples
	* @returns List of {@link PendingWrite} tuples of the form `[channelKey, value]`.
	* @internal
	*/ _updateAsTuples() {
        if (this.update && typeof this.update === "object" && !Array.isArray(this.update)) return Object.entries(this.update);
        else if (Array.isArray(this.update) && this.update.every((t)=>Array.isArray(t) && t.length === 2 && typeof t[0] === "string")) return this.update;
        else return [
            [
                "__root__",
                this.update
            ]
        ];
    }
    toJSON() {
        let serializedGoto;
        if (typeof this.goto === "string") serializedGoto = this.goto;
        else if (_isSend(this.goto)) serializedGoto = this.goto.toJSON();
        else serializedGoto = this.goto?.map((innerGoto)=>{
            if (typeof innerGoto === "string") return innerGoto;
            else return innerGoto.toJSON();
        });
        return {
            lg_name: this.lg_name,
            update: this.update,
            resume: this.resume,
            goto: serializedGoto
        };
    }
};
/**
* A type guard to check if the given value is a {@link Command}.
*
* Useful for type narrowing when working with the {@link Command} object.
*
* @param x - The value to check.
* @returns `true` if the value is a {@link Command}, `false` otherwise.
*/ function isCommand(x) {
    if (typeof x !== "object") return false;
    if (x === null || x === void 0) return false;
    if ("lg_name" in x && x.lg_name === "Command") return true;
    return false;
}
/**
* Reconstructs Command and Send objects from a deeply nested tree of anonymous objects
* matching their interfaces.
*
* This is only exported for testing purposes. It is NOT intended to be used outside of
* the Command and Send classes.
*
* @internal
*
* @param x - The command send tree to convert.
* @param seen - A map of seen objects to avoid infinite loops.
* @returns The converted command send tree.
*/ function _deserializeCommandSendObjectGraph(x, seen = /* @__PURE__ */ new Map()) {
    if (x !== void 0 && x !== null && typeof x === "object") {
        if (seen.has(x)) return seen.get(x);
        let result;
        if (Array.isArray(x)) {
            result = [];
            seen.set(x, result);
            x.forEach((item, index)=>{
                result[index] = _deserializeCommandSendObjectGraph(item, seen);
            });
        } else if (isCommand(x) && !(x instanceof Command)) {
            result = new Command(x);
            seen.set(x, result);
        } else if (_isSendInterface(x) && !(x instanceof Send)) {
            result = new Send(x.node, x.args);
            seen.set(x, result);
        } else if (isCommand(x) || _isSend(x)) {
            result = x;
            seen.set(x, result);
        } else if ("lc_serializable" in x && x.lc_serializable) {
            result = x;
            seen.set(x, result);
        } else {
            result = {};
            seen.set(x, result);
            for (const [key, value] of Object.entries(x))result[key] = _deserializeCommandSendObjectGraph(value, seen);
        }
        return result;
    }
    return x;
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseLangGraphError",
    ()=>BaseLangGraphError,
    "EmptyChannelError",
    ()=>EmptyChannelError,
    "EmptyInputError",
    ()=>EmptyInputError,
    "GraphBubbleUp",
    ()=>GraphBubbleUp,
    "GraphInterrupt",
    ()=>GraphInterrupt,
    "GraphRecursionError",
    ()=>GraphRecursionError,
    "GraphValueError",
    ()=>GraphValueError,
    "InvalidUpdateError",
    ()=>InvalidUpdateError,
    "MultipleSubgraphsError",
    ()=>MultipleSubgraphsError,
    "NodeInterrupt",
    ()=>NodeInterrupt,
    "ParentCommand",
    ()=>ParentCommand,
    "RemoteException",
    ()=>RemoteException,
    "StateGraphInputError",
    ()=>StateGraphInputError,
    "UnreachableNodeError",
    ()=>UnreachableNodeError,
    "getSubgraphsSeenSet",
    ()=>getSubgraphsSeenSet,
    "isGraphBubbleUp",
    ()=>isGraphBubbleUp,
    "isGraphInterrupt",
    ()=>isGraphInterrupt,
    "isParentCommand",
    ()=>isParentCommand
]);
//#region src/errors.ts
/** @category Errors */ var BaseLangGraphError = class extends Error {
    lc_error_code;
    constructor(message, fields){
        let finalMessage = message ?? "";
        if (fields?.lc_error_code) finalMessage = `${finalMessage}\n\nTroubleshooting URL: https://docs.langchain.com/oss/javascript/langgraph/${fields.lc_error_code}/\n`;
        super(finalMessage);
        this.lc_error_code = fields?.lc_error_code;
    }
};
var GraphBubbleUp = class extends BaseLangGraphError {
    get is_bubble_up() {
        return true;
    }
};
var GraphRecursionError = class extends BaseLangGraphError {
    constructor(message, fields){
        super(message, fields);
        this.name = "GraphRecursionError";
    }
    static get unminifiable_name() {
        return "GraphRecursionError";
    }
};
var GraphValueError = class extends BaseLangGraphError {
    constructor(message, fields){
        super(message, fields);
        this.name = "GraphValueError";
    }
    static get unminifiable_name() {
        return "GraphValueError";
    }
};
var GraphInterrupt = class extends GraphBubbleUp {
    interrupts;
    constructor(interrupts, fields){
        super(JSON.stringify(interrupts, null, 2), fields);
        this.name = "GraphInterrupt";
        this.interrupts = interrupts ?? [];
    }
    static get unminifiable_name() {
        return "GraphInterrupt";
    }
};
/** Raised by a node to interrupt execution. */ var NodeInterrupt = class extends GraphInterrupt {
    constructor(message, fields){
        super([
            {
                value: message
            }
        ], fields);
        this.name = "NodeInterrupt";
    }
    static get unminifiable_name() {
        return "NodeInterrupt";
    }
};
var ParentCommand = class extends GraphBubbleUp {
    command;
    constructor(command){
        super();
        this.name = "ParentCommand";
        this.command = command;
    }
    static get unminifiable_name() {
        return "ParentCommand";
    }
};
function isParentCommand(e) {
    return e !== void 0 && e.name === ParentCommand.unminifiable_name;
}
function isGraphBubbleUp(e) {
    return e !== void 0 && e.is_bubble_up === true;
}
function isGraphInterrupt(e) {
    return e !== void 0 && [
        GraphInterrupt.unminifiable_name,
        NodeInterrupt.unminifiable_name
    ].includes(e.name);
}
var EmptyInputError = class extends BaseLangGraphError {
    constructor(message, fields){
        super(message, fields);
        this.name = "EmptyInputError";
    }
    static get unminifiable_name() {
        return "EmptyInputError";
    }
};
var EmptyChannelError = class extends BaseLangGraphError {
    constructor(message, fields){
        super(message, fields);
        this.name = "EmptyChannelError";
    }
    static get unminifiable_name() {
        return "EmptyChannelError";
    }
};
var InvalidUpdateError = class extends BaseLangGraphError {
    constructor(message, fields){
        super(message, fields);
        this.name = "InvalidUpdateError";
    }
    static get unminifiable_name() {
        return "InvalidUpdateError";
    }
};
/**
* @deprecated This exception type is no longer thrown.
*/ var MultipleSubgraphsError = class extends BaseLangGraphError {
    constructor(message, fields){
        super(message, fields);
        this.name = "MultipleSubgraphError";
    }
    static get unminifiable_name() {
        return "MultipleSubgraphError";
    }
};
var UnreachableNodeError = class extends BaseLangGraphError {
    constructor(message, fields){
        super(message, fields);
        this.name = "UnreachableNodeError";
    }
    static get unminifiable_name() {
        return "UnreachableNodeError";
    }
};
/**
* Exception raised when an error occurs in the remote graph.
*/ var RemoteException = class extends BaseLangGraphError {
    constructor(message, fields){
        super(message, fields);
        this.name = "RemoteException";
    }
    static get unminifiable_name() {
        return "RemoteException";
    }
};
/**
* Error thrown when invalid input is provided to a StateGraph.
*
* This typically means that the input to the StateGraph constructor or builder
* did not match the required types. A valid input should be a
* StateDefinition, an Annotation.Root, or a Zod schema.
*
* @example
* // Example of incorrect usage:
* try {
*   new StateGraph({ foo: "bar" }); // Not a valid input
* } catch (err) {
*   if (err instanceof StateGraphInputError) {
*     console.error(err.message);
*   }
* }
*/ var StateGraphInputError = class extends BaseLangGraphError {
    /**
	* Create a new StateGraphInputError.
	* @param message - Optional custom error message.
	* @param fields - Optional additional error fields.
	*/ constructor(message, fields){
        super(message, fields);
        this.name = "StateGraphInputError";
        this.message = "Invalid StateGraph input. Make sure to pass a valid StateDefinition, Annotation.Root, or Zod schema.";
    }
    /**
	* The unminifiable (static, human-readable) error name for this error class.
	*/ static get unminifiable_name() {
        return "StateGraphInputError";
    }
};
/**
* Used for subgraph detection.
*/ const getSubgraphsSeenSet = ()=>{
    if (globalThis[Symbol.for("LG_CHECKPOINT_SEEN_NS_SET")] === void 0) globalThis[Symbol.for("LG_CHECKPOINT_SEEN_NS_SET")] = /* @__PURE__ */ new Set();
    return globalThis[Symbol.for("LG_CHECKPOINT_SEEN_NS_SET")];
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseChannel",
    ()=>BaseChannel,
    "createCheckpoint",
    ()=>createCheckpoint,
    "emptyChannels",
    ()=>emptyChannels,
    "getOnlyChannels",
    ()=>getOnlyChannels,
    "isBaseChannel",
    ()=>isBaseChannel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$id$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/id.js [app-route] (ecmascript)");
;
;
//#region src/channels/base.ts
function isBaseChannel(obj) {
    return obj != null && obj.lg_is_channel === true;
}
/** @internal */ var BaseChannel = class {
    ValueType;
    UpdateType;
    /** @ignore */ lg_is_channel = true;
    /**
	* Mark the current value of the channel as consumed. By default, no-op.
	* A channel can use this method to modify its state, preventing the value
	* from being consumed again.
	*
	* Returns True if the channel was updated, False otherwise.
	*/ consume() {
        return false;
    }
    /**
	* Notify the channel that the Pregel run is finishing. By default, no-op.
	* A channel can use this method to modify its state, preventing finish.
	*
	* Returns True if the channel was updated, False otherwise.
	*/ finish() {
        return false;
    }
    /**
	* Return True if the channel is available (not empty), False otherwise.
	* Subclasses should override this method to provide a more efficient
	* implementation than calling get() and catching EmptyChannelError.
	*/ isAvailable() {
        try {
            this.get();
            return true;
        } catch (error) {
            if (error.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"].unminifiable_name) return false;
            throw error;
        }
    }
    /**
	* Compare this channel with another channel for equality.
	* Used to determine if two channels with the same key are semantically equivalent.
	* Subclasses should override this method to provide a meaningful comparison.
	*
	* @param {BaseChannel} other - The other channel to compare with.
	* @returns {boolean} True if the channels are equal, false otherwise.
	*/ equals(other) {
        return this === other;
    }
};
const IS_ONLY_BASE_CHANNEL = Symbol.for("LG_IS_ONLY_BASE_CHANNEL");
function getOnlyChannels(channels) {
    if (channels[IS_ONLY_BASE_CHANNEL] === true) return channels;
    const newChannels = {};
    for(const k in channels){
        if (!Object.prototype.hasOwnProperty.call(channels, k)) continue;
        const value = channels[k];
        if (isBaseChannel(value)) newChannels[k] = value;
    }
    Object.assign(newChannels, {
        [IS_ONLY_BASE_CHANNEL]: true
    });
    return newChannels;
}
function emptyChannels(channels, checkpoint) {
    const filteredChannels = getOnlyChannels(channels);
    const newChannels = {};
    for(const k in filteredChannels){
        if (!Object.prototype.hasOwnProperty.call(filteredChannels, k)) continue;
        const channelValue = checkpoint.channel_values[k];
        newChannels[k] = filteredChannels[k].fromCheckpoint(channelValue);
    }
    Object.assign(newChannels, {
        [IS_ONLY_BASE_CHANNEL]: true
    });
    return newChannels;
}
function createCheckpoint(checkpoint, channels, step, options) {
    let values;
    if (channels === void 0) values = checkpoint.channel_values;
    else {
        values = {};
        for(const k in channels){
            if (!Object.prototype.hasOwnProperty.call(channels, k)) continue;
            try {
                values[k] = channels[k].checkpoint();
            } catch (error) {
                if (error.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"].unminifiable_name) {} else throw error;
            }
        }
    }
    return {
        v: 4,
        id: options?.id ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$id$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid6"])(step),
        ts: /* @__PURE__ */ new Date().toISOString(),
        channel_values: values,
        channel_versions: checkpoint.channel_versions,
        versions_seen: checkpoint.versions_seen
    };
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/binop.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BinaryOperatorAggregate",
    ()=>BinaryOperatorAggregate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
;
;
;
//#region src/channels/binop.ts
const isBinaryOperatorAggregate = (value)=>{
    return value != null && value.lc_graph_name === "BinaryOperatorAggregate";
};
/**
* Stores the result of applying a binary operator to the current value and each new value.
*/ var BinaryOperatorAggregate = class BinaryOperatorAggregate extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseChannel"] {
    lc_graph_name = "BinaryOperatorAggregate";
    value;
    operator;
    initialValueFactory;
    constructor(operator, initialValueFactory){
        super();
        this.operator = operator;
        this.initialValueFactory = initialValueFactory;
        this.value = initialValueFactory?.();
    }
    fromCheckpoint(checkpoint) {
        const empty = new BinaryOperatorAggregate(this.operator, this.initialValueFactory);
        if (typeof checkpoint !== "undefined") empty.value = checkpoint;
        return empty;
    }
    update(values) {
        let newValues = values;
        if (!newValues.length) return false;
        if (this.value === void 0) {
            const first = newValues[0];
            const [isOverwrite, overwriteVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_getOverwriteValue"])(first);
            if (isOverwrite) this.value = overwriteVal;
            else this.value = first;
            newValues = newValues.slice(1);
        }
        let seenOverwrite = false;
        for (const incoming of newValues)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isOverwriteValue"])(incoming)) {
            if (seenOverwrite) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"]("Can receive only one Overwrite value per step.");
            const [, val] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_getOverwriteValue"])(incoming);
            this.value = val;
            seenOverwrite = true;
            continue;
        } else if (!seenOverwrite && this.value !== void 0) this.value = this.operator(this.value, incoming);
        return true;
    }
    get() {
        if (this.value === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
        return this.value;
    }
    checkpoint() {
        if (this.value === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
        return this.value;
    }
    isAvailable() {
        return this.value !== void 0;
    }
    /**
	* Compare this channel with another channel for equality.
	* Two BinaryOperatorAggregate channels are equal if they have the same operator function.
	* This follows the Python implementation which compares operator references.
	*/ equals(other) {
        if (this === other) return true;
        if (!isBinaryOperatorAggregate(other)) return false;
        return this.operator === other.operator;
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/last_value.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LastValue",
    ()=>LastValue,
    "LastValueAfterFinish",
    ()=>LastValueAfterFinish
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
;
;
//#region src/channels/last_value.ts
/**
* Stores the last value received, can receive at most one value per step.
*
* Since `update` is only called once per step and value can only be of length 1,
* LastValue always stores the last value of a single node. If multiple nodes attempt to
* write to this channel in a single step, an error will be thrown.
* @internal
*/ var LastValue = class LastValue extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseChannel"] {
    lc_graph_name = "LastValue";
    value = [];
    constructor(initialValueFactory){
        super();
        this.initialValueFactory = initialValueFactory;
        if (initialValueFactory) this.value = [
            initialValueFactory()
        ];
    }
    fromCheckpoint(checkpoint) {
        const empty = new LastValue(this.initialValueFactory);
        if (typeof checkpoint !== "undefined") empty.value = [
            checkpoint
        ];
        return empty;
    }
    update(values) {
        if (values.length === 0) return false;
        if (values.length !== 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"]("LastValue can only receive one value per step.", {
            lc_error_code: "INVALID_CONCURRENT_GRAPH_UPDATE"
        });
        this.value = [
            values[values.length - 1]
        ];
        return true;
    }
    get() {
        if (this.value.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
        return this.value[0];
    }
    checkpoint() {
        if (this.value.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
        return this.value[0];
    }
    isAvailable() {
        return this.value.length !== 0;
    }
};
/**
* Stores the last value received, but only made available after finish().
* Once made available, clears the value.
*/ var LastValueAfterFinish = class LastValueAfterFinish extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseChannel"] {
    lc_graph_name = "LastValueAfterFinish";
    value = [];
    finished = false;
    fromCheckpoint(checkpoint) {
        const empty = new LastValueAfterFinish();
        if (typeof checkpoint !== "undefined") {
            const [value, finished] = checkpoint;
            empty.value = [
                value
            ];
            empty.finished = finished;
        }
        return empty;
    }
    update(values) {
        if (values.length === 0) return false;
        this.finished = false;
        this.value = [
            values[values.length - 1]
        ];
        return true;
    }
    get() {
        if (this.value.length === 0 || !this.finished) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
        return this.value[0];
    }
    checkpoint() {
        if (this.value.length === 0) return void 0;
        return [
            this.value[0],
            this.finished
        ];
    }
    consume() {
        if (this.finished) {
            this.finished = false;
            this.value = [];
            return true;
        }
        return false;
    }
    finish() {
        if (!this.finished && this.value.length > 0) {
            this.finished = true;
            return true;
        }
        return false;
    }
    isAvailable() {
        return this.value.length !== 0 && this.finished;
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/annotation.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Annotation",
    ()=>Annotation,
    "AnnotationRoot",
    ()=>AnnotationRoot,
    "getChannel",
    ()=>getChannel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$binop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/binop.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/last_value.js [app-route] (ecmascript)");
;
;
//#region src/graph/annotation.ts
/**
* Should not be instantiated directly. See {@link Annotation}.
*/ var AnnotationRoot = class {
    lc_graph_name = "AnnotationRoot";
    spec;
    constructor(s){
        this.spec = s;
    }
    static isInstance(value) {
        return typeof value === "object" && value !== null && "lc_graph_name" in value && value.lc_graph_name === "AnnotationRoot";
    }
};
/**
* Helper that instantiates channels within a StateGraph state.
*
* Can be used as a field in an {@link Annotation.Root} wrapper in one of two ways:
* 1. **Directly**: Creates a channel that stores the most recent value returned from a node.
* 2. **With a reducer**: Creates a channel that applies the reducer on a node's return value.
*
* @example
* ```ts
* import { StateGraph, Annotation } from "@langchain/langgraph";
*
* // Define a state with a single string key named "currentOutput"
* const SimpleAnnotation = Annotation.Root({
*   currentOutput: Annotation<string>,
* });
*
* const graphBuilder = new StateGraph(SimpleAnnotation);
*
* // A node in the graph that returns an object with a "currentOutput" key
* // replaces the value in the state. You can get the state type as shown below:
* const myNode = (state: typeof SimpleAnnotation.State) => {
*   return {
*     currentOutput: "some_new_value",
*   };
* }
*
* const graph = graphBuilder
*   .addNode("myNode", myNode)
*   ...
*   .compile();
* ```
*
* @example
* ```ts
* import { type BaseMessage, AIMessage } from "@langchain/core/messages";
* import { StateGraph, Annotation } from "@langchain/langgraph";
*
* // Define a state with a single key named "messages" that will
* // combine a returned BaseMessage or arrays of BaseMessages
* const AnnotationWithReducer = Annotation.Root({
*   messages: Annotation<BaseMessage[]>({
*     // Different types are allowed for updates
*     reducer: (left: BaseMessage[], right: BaseMessage | BaseMessage[]) => {
*       if (Array.isArray(right)) {
*         return left.concat(right);
*       }
*       return left.concat([right]);
*     },
*     default: () => [],
*   }),
* });
*
* const graphBuilder = new StateGraph(AnnotationWithReducer);
*
* // A node in the graph that returns an object with a "messages" key
* // will update the state by combining the existing value with the returned one.
* const myNode = (state: typeof AnnotationWithReducer.State) => {
*   return {
*     messages: [new AIMessage("Some new response")],
*   };
* };
*
* const graph = graphBuilder
*   .addNode("myNode", myNode)
*   ...
*   .compile();
* ```
* @namespace
* @property Root
* Helper function that instantiates a StateGraph state. See {@link Annotation} for usage.
*/ const Annotation = function(annotation) {
    if (annotation) return getChannel(annotation);
    else return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LastValue"]();
};
Annotation.Root = (sd)=>new AnnotationRoot(sd);
function getChannel(reducer) {
    if (typeof reducer === "object" && reducer && "reducer" in reducer && reducer.reducer) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$binop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryOperatorAggregate"](reducer.reducer, reducer.default);
    if (typeof reducer === "object" && reducer && "value" in reducer && reducer.value) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$binop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryOperatorAggregate"](reducer.value, reducer.default);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LastValue"]();
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/config.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureLangGraphConfig",
    ()=>ensureLangGraphConfig,
    "getConfig",
    ()=>getConfig,
    "getCurrentTaskInput",
    ()=>getCurrentTaskInput,
    "getParentCheckpointNamespace",
    ()=>getParentCheckpointNamespace,
    "getStore",
    ()=>getStore,
    "getWriter",
    ()=>getWriter,
    "propagateConfigurableToMetadata",
    ()=>propagateConfigurableToMetadata,
    "recastCheckpointNamespace",
    ()=>recastCheckpointNamespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)");
;
;
//#region src/pregel/utils/config.ts
const COPIABLE_KEYS = [
    "tags",
    "metadata",
    "callbacks",
    "configurable"
];
const CONFIG_KEYS = [
    "tags",
    "metadata",
    "callbacks",
    "runName",
    "maxConcurrency",
    "recursionLimit",
    "configurable",
    "runId",
    "outputKeys",
    "streamMode",
    "store",
    "writer",
    "interrupt",
    "context",
    "interruptBefore",
    "interruptAfter",
    "checkpointDuring",
    "durability",
    "signal",
    "executionInfo",
    "serverInfo"
];
const DEFAULT_RECURSION_LIMIT = 25;
const PROPAGATE_TO_METADATA = new Set([
    "thread_id",
    "checkpoint_id",
    "checkpoint_ns",
    "task_id",
    "run_id",
    "assistant_id",
    "graph_id"
]);
function propagateConfigurableToMetadata(configurable, metadata) {
    if (!configurable) return metadata;
    const result = metadata ?? {};
    for (const key of PROPAGATE_TO_METADATA){
        if (key in result) continue;
        const value = configurable[key];
        if (value !== void 0) result[key] = value;
    }
    return result;
}
function ensureLangGraphConfig(...configs) {
    const empty = {
        tags: [],
        metadata: {},
        callbacks: void 0,
        recursionLimit: DEFAULT_RECURSION_LIMIT,
        configurable: {}
    };
    const implicitConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].getRunnableConfig();
    if (implicitConfig !== void 0) {
        for (const [k, v] of Object.entries(implicitConfig))if (v !== void 0) if (COPIABLE_KEYS.includes(k)) {
            let copiedValue;
            if (Array.isArray(v)) copiedValue = [
                ...v
            ];
            else if (typeof v === "object") if (k === "callbacks" && "copy" in v && typeof v.copy === "function") copiedValue = v.copy();
            else copiedValue = {
                ...v
            };
            else copiedValue = v;
            empty[k] = copiedValue;
        } else empty[k] = v;
    }
    for (const config of configs){
        if (config === void 0) continue;
        for (const [k, v] of Object.entries(config))if (v !== void 0 && CONFIG_KEYS.includes(k)) empty[k] = v;
    }
    empty.metadata = propagateConfigurableToMetadata(empty.configurable, empty.metadata) ?? {};
    return empty;
}
/**
* A helper utility function that returns the {@link BaseStore} that was set when the graph was initialized
*
* @returns a reference to the {@link BaseStore} that was set when the graph was initialized
*/ function getStore(config) {
    const runConfig = config ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].getRunnableConfig();
    if (runConfig === void 0) throw new Error([
        "Config not retrievable. This is likely because you are running in an environment without support for AsyncLocalStorage.",
        "If you're running `getStore` in such environment, pass the `config` from the node function directly."
    ].join("\n"));
    return runConfig?.store;
}
/**
* A helper utility function that returns the {@link LangGraphRunnableConfig#writer} if "custom" stream mode is enabled, otherwise undefined.
*
* @returns a reference to the {@link LangGraphRunnableConfig#writer} if "custom" stream mode is enabled, otherwise undefined
*/ function getWriter(config) {
    const runConfig = config ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].getRunnableConfig();
    if (runConfig === void 0) throw new Error([
        "Config not retrievable. This is likely because you are running in an environment without support for AsyncLocalStorage.",
        "If you're running `getWriter` in such environment, pass the `config` from the node function directly."
    ].join("\n"));
    return runConfig?.writer || runConfig?.configurable?.writer;
}
/**
* A helper utility function that returns the {@link LangGraphRunnableConfig} that was set when the graph was initialized.
*
* Note: This only works when running in an environment that supports node:async_hooks and AsyncLocalStorage. If you're running this in a
* web environment, access the LangGraphRunnableConfig from the node function directly.
*
* @returns the {@link LangGraphRunnableConfig} that was set when the graph was initialized
*/ function getConfig() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].getRunnableConfig();
}
/**
* A helper utility function that returns the input for the currently executing task
*
* @returns the input for the currently executing task
*/ function getCurrentTaskInput(config) {
    const runConfig = config ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].getRunnableConfig();
    if (runConfig === void 0) throw new Error([
        "Config not retrievable. This is likely because you are running in an environment without support for AsyncLocalStorage.",
        "If you're running `getCurrentTaskInput` in such environment, pass the `config` from the node function directly."
    ].join("\n"));
    if (runConfig.configurable?.["__pregel_scratchpad"]?.currentTaskInput === void 0) throw new Error("BUG: internal scratchpad not initialized.");
    return runConfig.configurable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SCRATCHPAD"]].currentTaskInput;
}
function recastCheckpointNamespace(namespace) {
    return namespace.split("|").filter((part)=>!part.match(/^\d+$/)).map((part)=>part.split(":")[0]).join("|");
}
function getParentCheckpointNamespace(namespace) {
    const parts = namespace.split("|");
    while(parts.length > 1 && parts[parts.length - 1].match(/^\d+$/))parts.pop();
    return parts.slice(0, -1).join("|");
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/hash.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XXH3",
    ()=>XXH3,
    "isXXH3",
    ()=>isXXH3
]);
//#region src/hash.ts
const n = (n)=>BigInt(n);
const view = (data, offset = 0)=>new DataView(data.buffer, data.byteOffset + offset, data.byteLength - offset);
const PRIME32_1 = n("0x9E3779B1");
const PRIME32_2 = n("0x85EBCA77");
const PRIME32_3 = n("0xC2B2AE3D");
const PRIME64_1 = n("0x9E3779B185EBCA87");
const PRIME64_2 = n("0xC2B2AE3D27D4EB4F");
const PRIME64_3 = n("0x165667B19E3779F9");
const PRIME64_4 = n("0x85EBCA77C2B2AE63");
const PRIME64_5 = n("0x27D4EB2F165667C5");
const PRIME_MX1 = n("0x165667919E3779F9");
const PRIME_MX2 = n("0x9FB21C651E98DF25");
const hexToUint8Array = (hex)=>{
    const strLen = hex.length;
    if (strLen % 2 !== 0) throw new Error("String should have an even number of characters");
    const maxLength = strLen / 2;
    const bytes = new Uint8Array(maxLength);
    let read = 0;
    let write = 0;
    while(write < maxLength){
        const slice = hex.slice(read, read += 2);
        bytes[write] = Number.parseInt(slice, 16);
        write += 1;
    }
    return view(bytes);
};
const kkey = hexToUint8Array("b8fe6c3923a44bbe7c01812cf721ad1cded46de9839097db7240a4a4b7b3671fcb79e64eccc0e578825ad07dccff7221b8084674f743248ee03590e6813a264c3c2852bb91c300cb88d0658b1b532ea371644897a20df94e3819ef46a9deacd8a8fa763fe39c343ff9dcbbc7c70b4f1d8a51e04bcdb45931c89f7ec9d9787364eac5ac8334d3ebc3c581a0fffa1363eb170ddd51b7f0da49d316552629d4689e2b16be587d47a1fc8ff8b8d17ad031ce45cb3a8f95160428afd7fbcabb4b407e");
const mask128 = (n(1) << n(128)) - n(1);
const mask64 = (n(1) << n(64)) - n(1);
const mask32 = (n(1) << n(32)) - n(1);
const STRIPE_LEN = 64;
const ACC_NB = STRIPE_LEN / 8;
const _U64 = 8;
const _U32 = 4;
function assert(a) {
    if (!a) throw new Error("Assert failed");
}
function bswap64(a) {
    const scratchbuf = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));
    scratchbuf.setBigUint64(0, a, true);
    return scratchbuf.getBigUint64(0, false);
}
function bswap32(input) {
    let a = input;
    a = (a & n(65535)) << n(16) | (a & n(4294901760)) >> n(16);
    a = (a & n(16711935)) << n(8) | (a & n(4278255360)) >> n(8);
    return a;
}
function XXH_mult32to64(a, b) {
    return (a & mask32) * (b & mask32) & mask64;
}
function rotl32(a, b) {
    return (a << b | a >> n(32) - b) & mask32;
}
function XXH3_accumulate_512(acc, dataView, keyView) {
    for(let i = 0; i < ACC_NB; i += 1){
        const data_val = dataView.getBigUint64(i * 8, true);
        const data_key = data_val ^ keyView.getBigUint64(i * 8, true);
        acc[i ^ 1] += data_val;
        acc[i] += XXH_mult32to64(data_key, data_key >> n(32));
    }
    return acc;
}
function XXH3_accumulate(acc, dataView, keyView, nbStripes) {
    for(let n = 0; n < nbStripes; n += 1)XXH3_accumulate_512(acc, view(dataView, n * STRIPE_LEN), view(keyView, n * 8));
    return acc;
}
function XXH3_scrambleAcc(acc, key) {
    for(let i = 0; i < ACC_NB; i += 1){
        const key64 = key.getBigUint64(i * 8, true);
        let acc64 = acc[i];
        acc64 = xorshift64(acc64, n(47));
        acc64 ^= key64;
        acc64 *= PRIME32_1;
        acc[i] = acc64 & mask64;
    }
    return acc;
}
function XXH3_mix2Accs(acc, key) {
    return XXH3_mul128_fold64(acc[0] ^ key.getBigUint64(0, true), acc[1] ^ key.getBigUint64(_U64, true));
}
function XXH3_mergeAccs(acc, key, start) {
    let result64 = start;
    result64 += XXH3_mix2Accs(acc.slice(0), view(key, 0 * _U32));
    result64 += XXH3_mix2Accs(acc.slice(2), view(key, 4 * _U32));
    result64 += XXH3_mix2Accs(acc.slice(4), view(key, 8 * _U32));
    result64 += XXH3_mix2Accs(acc.slice(6), view(key, 12 * _U32));
    return XXH3_avalanche(result64 & mask64);
}
function XXH3_hashLong(input, data, secret, f_acc, f_scramble) {
    let acc = input;
    const nbStripesPerBlock = Math.floor((secret.byteLength - STRIPE_LEN) / 8);
    const block_len = STRIPE_LEN * nbStripesPerBlock;
    const nb_blocks = Math.floor((data.byteLength - 1) / block_len);
    for(let n = 0; n < nb_blocks; n += 1){
        acc = XXH3_accumulate(acc, view(data, n * block_len), secret, nbStripesPerBlock);
        acc = f_scramble(acc, view(secret, secret.byteLength - STRIPE_LEN));
    }
    {
        const nbStripes = Math.floor((data.byteLength - 1 - block_len * nb_blocks) / STRIPE_LEN);
        acc = XXH3_accumulate(acc, view(data, nb_blocks * block_len), secret, nbStripes);
        acc = f_acc(acc, view(data, data.byteLength - STRIPE_LEN), view(secret, secret.byteLength - STRIPE_LEN - 7));
    }
    return acc;
}
function XXH3_hashLong_128b(data, secret) {
    let acc = new BigUint64Array([
        PRIME32_3,
        PRIME64_1,
        PRIME64_2,
        PRIME64_3,
        PRIME64_4,
        PRIME32_2,
        PRIME64_5,
        PRIME32_1
    ]);
    assert(data.byteLength > 128);
    acc = XXH3_hashLong(acc, data, secret, XXH3_accumulate_512, XXH3_scrambleAcc);
    assert(acc.length * 8 === 64);
    {
        const low64 = XXH3_mergeAccs(acc, view(secret, 11), n(data.byteLength) * PRIME64_1 & mask64);
        return XXH3_mergeAccs(acc, view(secret, secret.byteLength - STRIPE_LEN - 11), ~(n(data.byteLength) * PRIME64_2) & mask64) << n(64) | low64;
    }
}
function XXH3_mul128_fold64(a, b) {
    const lll = a * b & mask128;
    return lll & mask64 ^ lll >> n(64);
}
function XXH3_mix16B(dataView, keyView, seed) {
    return XXH3_mul128_fold64((dataView.getBigUint64(0, true) ^ keyView.getBigUint64(0, true) + seed) & mask64, (dataView.getBigUint64(8, true) ^ keyView.getBigUint64(8, true) - seed) & mask64);
}
function XXH3_mix32B(acc, data1, data2, key, seed) {
    let accl = acc & mask64;
    let acch = acc >> n(64) & mask64;
    accl += XXH3_mix16B(data1, key, seed);
    accl ^= data2.getBigUint64(0, true) + data2.getBigUint64(8, true);
    accl &= mask64;
    acch += XXH3_mix16B(data2, view(key, 16), seed);
    acch ^= data1.getBigUint64(0, true) + data1.getBigUint64(8, true);
    acch &= mask64;
    return acch << n(64) | accl;
}
function XXH3_avalanche(input) {
    let h64 = input;
    h64 ^= h64 >> n(37);
    h64 *= PRIME_MX1;
    h64 &= mask64;
    h64 ^= h64 >> n(32);
    return h64;
}
function XXH3_avalanche64(input) {
    let h64 = input;
    h64 ^= h64 >> n(33);
    h64 *= PRIME64_2;
    h64 &= mask64;
    h64 ^= h64 >> n(29);
    h64 *= PRIME64_3;
    h64 &= mask64;
    h64 ^= h64 >> n(32);
    return h64;
}
function XXH3_len_1to3_128b(data, key32, seed) {
    const len = data.byteLength;
    assert(len > 0 && len <= 3);
    const combined = n(data.getUint8(len - 1)) | n(len << 8) | n(data.getUint8(0) << 16) | n(data.getUint8(len >> 1) << 24);
    const low = (combined ^ (n(key32.getUint32(0, true)) ^ n(key32.getUint32(4, true))) + seed) & mask64;
    const bhigh = (n(key32.getUint32(8, true)) ^ n(key32.getUint32(12, true))) - seed;
    return (XXH3_avalanche64((rotl32(bswap32(combined), n(13)) ^ bhigh) & mask64) & mask64) << n(64) | XXH3_avalanche64(low);
}
function xorshift64(b, shift) {
    return b ^ b >> shift;
}
function XXH3_len_4to8_128b(data, key32, seed) {
    const len = data.byteLength;
    assert(len >= 4 && len <= 8);
    {
        const l1 = data.getUint32(0, true);
        const l2 = data.getUint32(len - 4, true);
        let m128 = ((n(l1) | n(l2) << n(32)) ^ (key32.getBigUint64(16, true) ^ key32.getBigUint64(24, true)) + seed & mask64) * (PRIME64_1 + (n(len) << n(2))) & mask128;
        m128 += (m128 & mask64) << n(65);
        m128 &= mask128;
        m128 ^= m128 >> n(67);
        return xorshift64(xorshift64(m128 & mask64, n(35)) * PRIME_MX2 & mask64, n(28)) | XXH3_avalanche(m128 >> n(64)) << n(64);
    }
}
function XXH3_len_9to16_128b(data, key64, seed) {
    const len = data.byteLength;
    assert(len >= 9 && len <= 16);
    {
        const bitflipl = (key64.getBigUint64(32, true) ^ key64.getBigUint64(40, true)) + seed & mask64;
        const bitfliph = (key64.getBigUint64(48, true) ^ key64.getBigUint64(56, true)) - seed & mask64;
        const ll1 = data.getBigUint64(0, true);
        let ll2 = data.getBigUint64(len - 8, true);
        let m128 = (ll1 ^ ll2 ^ bitflipl) * PRIME64_1;
        const m128_l = (m128 & mask64) + (n(len - 1) << n(54));
        m128 = m128 & (mask128 ^ mask64) | m128_l;
        ll2 ^= bitfliph;
        m128 += ll2 + (ll2 & mask32) * (PRIME32_2 - n(1)) << n(64);
        m128 &= mask128;
        m128 ^= bswap64(m128 >> n(64));
        let h128 = (m128 & mask64) * PRIME64_2;
        h128 += (m128 >> n(64)) * PRIME64_2 << n(64);
        h128 &= mask128;
        return XXH3_avalanche(h128 & mask64) | XXH3_avalanche(h128 >> n(64)) << n(64);
    }
}
function XXH3_len_0to16_128b(data, seed) {
    const len = data.byteLength;
    assert(len <= 16);
    if (len > 8) return XXH3_len_9to16_128b(data, kkey, seed);
    if (len >= 4) return XXH3_len_4to8_128b(data, kkey, seed);
    if (len > 0) return XXH3_len_1to3_128b(data, kkey, seed);
    return XXH3_avalanche64(seed ^ kkey.getBigUint64(64, true) ^ kkey.getBigUint64(72, true)) | XXH3_avalanche64(seed ^ kkey.getBigUint64(80, true) ^ kkey.getBigUint64(88, true)) << n(64);
}
function inv64(x) {
    return ~x + n(1) & mask64;
}
function XXH3_len_17to128_128b(data, secret, seed) {
    let acc = n(data.byteLength) * PRIME64_1 & mask64;
    let i = n(data.byteLength - 1) / n(32);
    while(i >= 0){
        const ni = Number(i);
        acc = XXH3_mix32B(acc, view(data, 16 * ni), view(data, data.byteLength - 16 * (ni + 1)), view(secret, 32 * ni), seed);
        i -= n(1);
    }
    let h128l = acc + (acc >> n(64)) & mask64;
    h128l = XXH3_avalanche(h128l);
    let h128h = (acc & mask64) * PRIME64_1 + (acc >> n(64)) * PRIME64_4 + (n(data.byteLength) - seed & mask64) * PRIME64_2;
    h128h &= mask64;
    h128h = inv64(XXH3_avalanche(h128h));
    return h128l | h128h << n(64);
}
function XXH3_len_129to240_128b(data, secret, seed) {
    let acc = n(data.byteLength) * PRIME64_1 & mask64;
    for(let i = 32; i < 160; i += 32)acc = XXH3_mix32B(acc, view(data, i - 32), view(data, i - 16), view(secret, i - 32), seed);
    acc = XXH3_avalanche(acc & mask64) | XXH3_avalanche(acc >> n(64)) << n(64);
    for(let i = 160; i <= data.byteLength; i += 32)acc = XXH3_mix32B(acc, view(data, i - 32), view(data, i - 16), view(secret, 3 + i - 160), seed);
    acc = XXH3_mix32B(acc, view(data, data.byteLength - 16), view(data, data.byteLength - 32), view(secret, 103), inv64(seed));
    let h128l = acc + (acc >> n(64)) & mask64;
    h128l = XXH3_avalanche(h128l);
    let h128h = (acc & mask64) * PRIME64_1 + (acc >> n(64)) * PRIME64_4 + (n(data.byteLength) - seed & mask64) * PRIME64_2;
    h128h &= mask64;
    h128h = inv64(XXH3_avalanche(h128h));
    return h128l | h128h << n(64);
}
function XXH3(input, seed = n(0)) {
    const encoder = new TextEncoder();
    const data = view(typeof input === "string" ? encoder.encode(input) : input);
    const len = data.byteLength;
    const hexDigest = (data)=>data.toString(16).padStart(32, "0");
    if (len <= 16) return hexDigest(XXH3_len_0to16_128b(data, seed));
    if (len <= 128) return hexDigest(XXH3_len_17to128_128b(data, kkey, seed));
    if (len <= 240) return hexDigest(XXH3_len_129to240_128b(data, kkey, seed));
    return hexDigest(XXH3_hashLong_128b(data, kkey));
}
function isXXH3(value) {
    return /^[0-9a-f]{32}$/.test(value);
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/interrupt.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interrupt",
    ()=>interrupt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/hash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)");
;
;
;
;
//#region src/interrupt.ts
/**
* Interrupts the execution of a graph node.
* This function can be used to pause execution of a node, and return the value of the `resume`
* input when the graph is re-invoked using `Command`.
* Multiple interrupts can be called within a single node, and each will be handled sequentially.
*
* When an interrupt is called:
* 1. If there's a `resume` value available (from a previous `Command`), it returns that value.
* 2. Otherwise, it throws a `GraphInterrupt` with the provided value
* 3. The graph can be resumed by passing a `Command` with a `resume` value
*
* Because the `interrupt` function propagates by throwing a special `GraphInterrupt` error,
* you should avoid using `try/catch` blocks around the `interrupt` function,
* or if you do, ensure that the `GraphInterrupt` error is thrown again within your `catch` block.
*
* @param value - The value to include in the interrupt. This will be available in task.interrupts[].value
* @returns The `resume` value provided when the graph is re-invoked with a Command
*
* @example
* ```typescript
* // Define a node that uses multiple interrupts
* const nodeWithInterrupts = () => {
*   // First interrupt - will pause execution and include {value: 1} in task values
*   const answer1 = interrupt({ value: 1 });
*
*   // Second interrupt - only called after first interrupt is resumed
*   const answer2 = interrupt({ value: 2 });
*
*   // Use the resume values
*   return { myKey: answer1 + " " + answer2 };
* };
*
* // Resume the graph after first interrupt
* await graph.stream(new Command({ resume: "answer 1" }));
*
* // Resume the graph after second interrupt
* await graph.stream(new Command({ resume: "answer 2" }));
* // Final result: { myKey: "answer 1 answer 2" }
* ```
*
* @throws {Error} If called outside the context of a graph
* @throws {GraphInterrupt} When no resume value is available
*/ function interrupt(value) {
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].getRunnableConfig();
    if (!config) throw new Error("Called interrupt() outside the context of a graph.");
    const conf = config.configurable;
    if (!conf) throw new Error("No configurable found in config");
    if (!conf["__pregel_checkpointer"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphValueError"]("No checkpointer set", {
        lc_error_code: "MISSING_CHECKPOINTER"
    });
    const scratchpad = conf[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SCRATCHPAD"]];
    scratchpad.interruptCounter += 1;
    const idx = scratchpad.interruptCounter;
    if (scratchpad.resume.length > 0 && idx < scratchpad.resume.length) {
        conf[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SEND"]]?.([
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESUME"],
                scratchpad.resume
            ]
        ]);
        return scratchpad.resume[idx];
    }
    if (scratchpad.nullResume !== void 0) {
        if (scratchpad.resume.length !== idx) throw new Error(`Resume length mismatch: ${scratchpad.resume.length} !== ${idx}`);
        const v = scratchpad.consumeNullResume();
        scratchpad.resume.push(v);
        conf[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SEND"]]?.([
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESUME"],
                scratchpad.resume
            ]
        ]);
        return v;
    }
    const ns = conf[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_NS"]]?.split("|");
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphInterrupt"]([
        {
            id: ns ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XXH3"])(ns.join("|")) : void 0,
            value
        }
    ]);
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RunnableCallable",
    ()=>RunnableCallable,
    "gatherIterator",
    ()=>gatherIterator,
    "gatherIteratorSync",
    ()=>gatherIteratorSync,
    "isAsyncGeneratorFunction",
    ()=>isAsyncGeneratorFunction,
    "isGeneratorFunction",
    ()=>isGeneratorFunction,
    "patchConfigurable",
    ()=>patchConfigurable,
    "prefixGenerator",
    ()=>prefixGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/config.js [app-route] (ecmascript)");
;
;
;
//#region src/utils.ts
var RunnableCallable = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Runnable"] {
    lc_namespace = [
        "langgraph"
    ];
    func;
    tags;
    config;
    trace = true;
    recurse = true;
    constructor(fields){
        super();
        this.name = fields.name ?? fields.func.name;
        this.func = fields.func;
        this.config = fields.tags ? {
            tags: fields.tags
        } : void 0;
        this.trace = fields.trace ?? this.trace;
        this.recurse = fields.recurse ?? this.recurse;
    }
    async _tracedInvoke(input, config, runManager) {
        return new Promise((resolve, reject)=>{
            const childConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])(config, {
                callbacks: runManager?.getChild()
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].runWithConfig(childConfig, async ()=>{
                try {
                    resolve(await this.func(input, childConfig));
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
    async invoke(input, options) {
        let returnValue;
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureLangGraphConfig"])(options);
        const mergedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(this.config, config);
        if (this.trace) returnValue = await this._callWithConfig(this._tracedInvoke, input, mergedConfig);
        else returnValue = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].runWithConfig(mergedConfig, async ()=>this.func(input, mergedConfig));
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Runnable"].isRunnable(returnValue) && this.recurse) return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].runWithConfig(mergedConfig, async ()=>returnValue.invoke(input, mergedConfig));
        return returnValue;
    }
};
function* prefixGenerator(generator, prefix) {
    if (prefix === void 0) yield* generator;
    else for (const value of generator)yield [
        prefix,
        value
    ];
}
async function gatherIterator(i) {
    const out = [];
    for await (const item of (await i))out.push(item);
    return out;
}
function gatherIteratorSync(i) {
    const out = [];
    for (const item of i)out.push(item);
    return out;
}
function patchConfigurable(config, patch) {
    if (!config) return {
        configurable: patch
    };
    else if (!("configurable" in config)) return {
        ...config,
        configurable: patch
    };
    else return {
        ...config,
        configurable: {
            ...config.configurable,
            ...patch
        }
    };
}
function isAsyncGeneratorFunction(val) {
    return val != null && typeof val === "function" && val instanceof Object.getPrototypeOf(async function*() {}).constructor;
}
function isGeneratorFunction(val) {
    return val != null && typeof val === "function" && val instanceof Object.getPrototypeOf(function*() {}).constructor;
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/write.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChannelWrite",
    ()=>ChannelWrite,
    "PASSTHROUGH",
    ()=>PASSTHROUGH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/base.js [app-route] (ecmascript)");
;
;
;
;
function _isSkipWrite(x) {
    return typeof x === "object" && x?.[Symbol.for("LG_SKIP_WRITE")] !== void 0;
}
const PASSTHROUGH = {
    [Symbol.for("LG_PASSTHROUGH")]: true
};
function _isPassthrough(x) {
    return typeof x === "object" && x?.[Symbol.for("LG_PASSTHROUGH")] !== void 0;
}
const IS_WRITER = Symbol("IS_WRITER");
/**
* Mapping of write channels to Runnables that return the value to be written,
* or None to skip writing.
*/ var ChannelWrite = class ChannelWrite extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableCallable"] {
    writes;
    constructor(writes, tags){
        const name = `ChannelWrite<${writes.map((packet)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSend"])(packet)) return packet.node;
            else if ("channel" in packet) return packet.channel;
            return "...";
        }).join(",")}>`;
        super({
            writes,
            name,
            tags,
            trace: false,
            func: async (input, config)=>{
                return this._write(input, config ?? {});
            }
        });
        this.writes = writes;
    }
    async _write(input, config) {
        const writes = this.writes.map((write)=>{
            if (_isChannelWriteTupleEntry(write) && _isPassthrough(write.value)) return {
                mapper: write.mapper,
                value: input
            };
            else if (_isChannelWriteEntry(write) && _isPassthrough(write.value)) return {
                channel: write.channel,
                value: input,
                skipNone: write.skipNone,
                mapper: write.mapper
            };
            else return write;
        });
        await ChannelWrite.doWrite(config, writes);
        return input;
    }
    static async doWrite(config, writes) {
        for (const w of writes){
            if (_isChannelWriteEntry(w)) {
                if (w.channel === "__pregel_tasks") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"]("Cannot write to the reserved channel TASKS");
                if (_isPassthrough(w.value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"]("PASSTHROUGH value must be replaced");
            }
            if (_isChannelWriteTupleEntry(w)) {
                if (_isPassthrough(w.value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"]("PASSTHROUGH value must be replaced");
            }
        }
        const writeEntries = [];
        for (const w of writes)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSend"])(w)) writeEntries.push([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TASKS"],
            w
        ]);
        else if (_isChannelWriteTupleEntry(w)) {
            const mappedResult = await w.mapper.invoke(w.value, config);
            if (mappedResult != null && mappedResult.length > 0) writeEntries.push(...mappedResult);
        } else if (_isChannelWriteEntry(w)) {
            const mappedValue = w.mapper !== void 0 ? await w.mapper.invoke(w.value, config) : w.value;
            if (_isSkipWrite(mappedValue)) continue;
            if (w.skipNone && mappedValue === void 0) continue;
            writeEntries.push([
                w.channel,
                mappedValue
            ]);
        } else throw new Error(`Invalid write entry: ${JSON.stringify(w)}`);
        const write = config.configurable?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SEND"]];
        write(writeEntries);
    }
    static isWriter(runnable) {
        return runnable instanceof ChannelWrite || IS_WRITER in runnable && !!runnable[IS_WRITER];
    }
    static registerWriter(runnable) {
        return Object.defineProperty(runnable, IS_WRITER, {
            value: true
        });
    }
};
function _isChannelWriteEntry(x) {
    return x !== void 0 && typeof x.channel === "string";
}
function _isChannelWriteTupleEntry(x) {
    return x !== void 0 && !_isChannelWriteEntry(x) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Runnable"].isRunnable(x.mapper);
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/read.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChannelRead",
    ()=>ChannelRead,
    "PregelNode",
    ()=>PregelNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/write.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$passthrough$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/passthrough.js [app-route] (ecmascript)");
;
;
;
;
//#region src/pregel/read.ts
var ChannelRead = class ChannelRead extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableCallable"] {
    lc_graph_name = "ChannelRead";
    channel;
    fresh = false;
    mapper;
    constructor(channel, mapper, fresh = false){
        super({
            trace: false,
            func: (_, config)=>ChannelRead.doRead(config, this.channel, this.fresh, this.mapper)
        });
        this.fresh = fresh;
        this.mapper = mapper;
        this.channel = channel;
        this.name = Array.isArray(channel) ? `ChannelRead<${channel.join(",")}>` : `ChannelRead<${channel}>`;
    }
    static doRead(config, channel, fresh, mapper) {
        const read = config.configurable?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_READ"]];
        if (!read) throw new Error("Runnable is not configured with a read function. Make sure to call in the context of a Pregel process");
        if (mapper) return mapper(read(channel, fresh));
        else return read(channel, fresh);
    }
};
const defaultRunnableBound = /* @__PURE__ */ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$passthrough$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnablePassthrough"]();
var PregelNode = class PregelNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableBinding"] {
    lc_graph_name = "PregelNode";
    channels;
    triggers = [];
    mapper;
    writers = [];
    bound = defaultRunnableBound;
    kwargs = {};
    metadata = {};
    tags = [];
    retryPolicy;
    cachePolicy;
    subgraphs;
    ends;
    constructor(fields){
        const { channels, triggers, mapper, writers, bound, kwargs, metadata, retryPolicy, cachePolicy, tags, subgraphs, ends } = fields;
        const mergedTags = [
            ...fields.config?.tags ? fields.config.tags : [],
            ...tags ?? []
        ];
        super({
            ...fields,
            bound: fields.bound ?? defaultRunnableBound,
            config: {
                ...fields.config ? fields.config : {},
                tags: mergedTags
            }
        });
        this.channels = channels;
        this.triggers = triggers;
        this.mapper = mapper;
        this.writers = writers ?? this.writers;
        this.bound = bound ?? this.bound;
        this.kwargs = kwargs ?? this.kwargs;
        this.metadata = metadata ?? this.metadata;
        this.tags = mergedTags;
        this.retryPolicy = retryPolicy;
        this.cachePolicy = cachePolicy;
        this.subgraphs = subgraphs;
        this.ends = ends;
    }
    getWriters() {
        const newWriters = [
            ...this.writers
        ];
        while(newWriters.length > 1 && newWriters[newWriters.length - 1] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"] && newWriters[newWriters.length - 2] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"]){
            const endWriters = newWriters.slice(-2);
            const combinedWrites = endWriters[0].writes.concat(endWriters[1].writes);
            newWriters[newWriters.length - 2] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"](combinedWrites, endWriters[0].config?.tags);
            newWriters.pop();
        }
        return newWriters;
    }
    getNode() {
        const writers = this.getWriters();
        if (this.bound === defaultRunnableBound && writers.length === 0) return;
        else if (this.bound === defaultRunnableBound && writers.length === 1) return writers[0];
        else if (this.bound === defaultRunnableBound) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableSequence"]({
            first: writers[0],
            middle: writers.slice(1, writers.length - 1),
            last: writers[writers.length - 1],
            omitSequenceTags: true
        });
        else if (writers.length > 0) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableSequence"]({
            first: this.bound,
            middle: writers.slice(0, writers.length - 1),
            last: writers[writers.length - 1],
            omitSequenceTags: true
        });
        else return this.bound;
    }
    join(channels) {
        if (!Array.isArray(channels)) throw new Error("channels must be a list");
        if (typeof this.channels !== "object") throw new Error("all channels must be named when using .join()");
        return new PregelNode({
            channels: {
                ...this.channels,
                ...Object.fromEntries(channels.map((chan)=>[
                        chan,
                        chan
                    ]))
            },
            triggers: this.triggers,
            mapper: this.mapper,
            writers: this.writers,
            bound: this.bound,
            kwargs: this.kwargs,
            config: this.config,
            retryPolicy: this.retryPolicy,
            cachePolicy: this.cachePolicy
        });
    }
    pipe(coerceable) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"].isWriter(coerceable)) return new PregelNode({
            channels: this.channels,
            triggers: this.triggers,
            mapper: this.mapper,
            writers: [
                ...this.writers,
                coerceable
            ],
            bound: this.bound,
            config: this.config,
            kwargs: this.kwargs,
            retryPolicy: this.retryPolicy,
            cachePolicy: this.cachePolicy
        });
        else if (this.bound === defaultRunnableBound) return new PregelNode({
            channels: this.channels,
            triggers: this.triggers,
            mapper: this.mapper,
            writers: this.writers,
            bound: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_coerceToRunnable"])(coerceable),
            config: this.config,
            kwargs: this.kwargs,
            retryPolicy: this.retryPolicy,
            cachePolicy: this.cachePolicy
        });
        else return new PregelNode({
            channels: this.channels,
            triggers: this.triggers,
            mapper: this.mapper,
            writers: this.writers,
            bound: this.bound.pipe(coerceable),
            config: this.config,
            kwargs: this.kwargs,
            retryPolicy: this.retryPolicy,
            cachePolicy: this.cachePolicy
        });
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/subgraph.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findSubgraphPregel",
    ()=>findSubgraphPregel,
    "isPregelLike",
    ()=>isPregelLike
]);
//#region src/pregel/utils/subgraph.ts
function isRunnableSequence(x) {
    return "steps" in x && Array.isArray(x.steps);
}
function isPregelLike(x) {
    return "lg_is_pregel" in x && x.lg_is_pregel === true;
}
function findSubgraphPregel(candidate) {
    const candidates = [
        candidate
    ];
    for (const candidate of candidates)if (isPregelLike(candidate)) return candidate;
    else if (isRunnableSequence(candidate)) candidates.push(...candidate.steps);
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/io.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapCommand",
    ()=>mapCommand,
    "mapInput",
    ()=>mapInput,
    "mapOutputUpdates",
    ()=>mapOutputUpdates,
    "mapOutputValues",
    ()=>mapOutputValues,
    "readChannel",
    ()=>readChannel,
    "readChannels",
    ()=>readChannels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/hash.js [app-route] (ecmascript)");
;
;
;
//#region src/pregel/io.ts
function readChannel(channels, chan, catchErrors = true, returnException = false) {
    try {
        return channels[chan].get();
    } catch (e) {
        if (e.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"].unminifiable_name) {
            if (returnException) return e;
            else if (catchErrors) return null;
        }
        throw e;
    }
}
function readChannels(channels, select, skipEmpty = true) {
    if (Array.isArray(select)) {
        const values = {};
        for (const k of select)try {
            values[k] = readChannel(channels, k, !skipEmpty);
        } catch (e) {
            if (e.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"].unminifiable_name) continue;
        }
        return values;
    } else return readChannel(channels, select);
}
/**
* Map input chunk to a sequence of pending writes in the form (channel, value).
*/ function* mapCommand(cmd, pendingWrites) {
    if (cmd.graph === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"].PARENT) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"]("There is no parent graph.");
    if (cmd.goto) {
        let sends;
        if (Array.isArray(cmd.goto)) sends = cmd.goto;
        else sends = [
            cmd.goto
        ];
        for (const send of sends)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSend"])(send)) yield [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NULL_TASK_ID"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TASKS"],
            send
        ];
        else if (typeof send === "string") yield [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NULL_TASK_ID"],
            `branch:to:${send}`,
            "__start__"
        ];
        else throw new Error(`In Command.send, expected Send or string, got ${typeof send}`);
    }
    if (cmd.resume) if (typeof cmd.resume === "object" && Object.keys(cmd.resume).length && Object.keys(cmd.resume).every(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isXXH3"])) for (const [tid, resume] of Object.entries(cmd.resume)){
        const existing = pendingWrites.filter((w)=>w[0] === tid && w[1] === "__resume__").map((w)=>w[2]).slice(0, 1) ?? [];
        existing.push(resume);
        yield [
            tid,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESUME"],
            existing
        ];
    }
    else yield [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NULL_TASK_ID"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESUME"],
        cmd.resume
    ];
    if (cmd.update) {
        if (typeof cmd.update !== "object" || !cmd.update) throw new Error("Expected cmd.update to be a dict mapping channel names to update values");
        if (Array.isArray(cmd.update)) for (const [k, v] of cmd.update)yield [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NULL_TASK_ID"],
            k,
            v
        ];
        else for (const [k, v] of Object.entries(cmd.update))yield [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NULL_TASK_ID"],
            k,
            v
        ];
    }
}
/**
* Map input chunk to a sequence of pending writes in the form [channel, value].
*/ function* mapInput(inputChannels, chunk) {
    if (chunk !== void 0 && chunk !== null) if (Array.isArray(inputChannels) && typeof chunk === "object" && !Array.isArray(chunk)) {
        for(const k in chunk)if (inputChannels.includes(k)) yield [
            k,
            chunk[k]
        ];
    } else if (Array.isArray(inputChannels)) throw new Error(`Input chunk must be an object when "inputChannels" is an array`);
    else yield [
        inputChannels,
        chunk
    ];
}
/**
* Map pending writes (a sequence of tuples (channel, value)) to output chunk.
*/ function* mapOutputValues(outputChannels, pendingWrites, channels) {
    if (Array.isArray(outputChannels)) {
        if (pendingWrites === true || pendingWrites.find(([chan, _])=>outputChannels.includes(chan))) yield readChannels(channels, outputChannels);
    } else if (pendingWrites === true || pendingWrites.some(([chan, _])=>chan === outputChannels)) yield readChannel(channels, outputChannels);
}
/**
* Map pending writes (a sequence of tuples (channel, value)) to output chunk.
* @internal
*
* @param outputChannels - The channels to output.
* @param tasks - The tasks to output.
* @param cached - Whether the output is cached.
*
* @returns A generator that yields the output chunk (if any).
*/ function* mapOutputUpdates(outputChannels, tasks, cached) {
    const outputTasks = tasks.filter(([task, ww])=>{
        return (task.config === void 0 || !task.config.tags?.includes("langsmith:hidden")) && ww[0][0] !== "__error__" && ww[0][0] !== "__interrupt__";
    });
    if (!outputTasks.length) return;
    let updated;
    if (outputTasks.some(([task])=>task.writes.some(([chan, _])=>chan === "__return__"))) updated = outputTasks.flatMap(([task])=>task.writes.filter(([chan, _])=>chan === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RETURN"]).map(([_, value])=>[
                task.name,
                value
            ]));
    else if (!Array.isArray(outputChannels)) updated = outputTasks.flatMap(([task])=>task.writes.filter(([chan, _])=>chan === outputChannels).map(([_, value])=>[
                task.name,
                value
            ]));
    else updated = outputTasks.flatMap(([task])=>{
        const { writes } = task;
        const counts = {};
        for (const [chan] of writes)if (outputChannels.includes(chan)) counts[chan] = (counts[chan] || 0) + 1;
        if (Object.values(counts).some((count)=>count > 1)) return writes.filter(([chan])=>outputChannels.includes(chan)).map(([chan, value])=>[
                task.name,
                {
                    [chan]: value
                }
            ]);
        else return [
            [
                task.name,
                Object.fromEntries(writes.filter(([chan])=>outputChannels.includes(chan)))
            ]
        ];
    });
    const grouped = {};
    for (const [node, value] of updated){
        if (!(node in grouped)) grouped[node] = [];
        grouped[node].push(value);
    }
    const flattened = {};
    for(const node in grouped)if (grouped[node].length === 1) {
        const [write] = grouped[node];
        flattened[node] = write;
    } else flattened[node] = grouped[node];
    if (cached) flattened["__metadata__"] = {
        cached
    };
    yield flattened;
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_coerceToDict",
    ()=>_coerceToDict,
    "combineAbortSignals",
    ()=>combineAbortSignals,
    "combineCallbacks",
    ()=>combineCallbacks,
    "getNewChannelVersions",
    ()=>getNewChannelVersions,
    "getNullChannelVersion",
    ()=>getNullChannelVersion,
    "patchCheckpointMap",
    ()=>patchCheckpointMap,
    "patchConfigurable",
    ()=>patchConfigurable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
;
//#region src/pregel/utils/index.ts
function getNullChannelVersion(currentVersions) {
    const startVersion = typeof currentVersions[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"]];
    if (startVersion === "number") return 0;
    if (startVersion === "string") return "";
    for(const key in currentVersions){
        if (!Object.prototype.hasOwnProperty.call(currentVersions, key)) continue;
        const versionType = typeof currentVersions[key];
        if (versionType === "number") return 0;
        if (versionType === "string") return "";
        break;
    }
}
function getNewChannelVersions(previousVersions, currentVersions) {
    if (Object.keys(previousVersions).length > 0) {
        const nullVersion = getNullChannelVersion(currentVersions);
        return Object.fromEntries(Object.entries(currentVersions).filter(([k, v])=>v > (previousVersions[k] ?? nullVersion)));
    } else return currentVersions;
}
function _coerceToDict(value, defaultKey) {
    return value && !Array.isArray(value) && !(value instanceof Date) && typeof value === "object" ? value : {
        [defaultKey]: value
    };
}
function patchConfigurable(config, patch) {
    if (config === null) return {
        configurable: patch
    };
    else if (config?.configurable === void 0) return {
        ...config,
        configurable: patch
    };
    else return {
        ...config,
        configurable: {
            ...config.configurable,
            ...patch
        }
    };
}
function patchCheckpointMap(config, metadata) {
    const parents = metadata?.parents ?? {};
    if (Object.keys(parents).length > 0) return patchConfigurable(config, {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_MAP"]]: {
            ...parents,
            [config.configurable?.checkpoint_ns ?? ""]: config.configurable?.checkpoint_id
        }
    });
    else return config;
}
/**
* Combine multiple abort signals into a single abort signal.
* @param signals - The abort signals to combine.
* @returns A combined abort signal and a dispose function to remove the abort listener if unused.
*/ function combineAbortSignals(...x) {
    const signals = [
        ...new Set(x.filter(Boolean))
    ];
    if (signals.length === 0) return {
        signal: void 0,
        dispose: void 0
    };
    if (signals.length === 1) return {
        signal: signals[0],
        dispose: void 0
    };
    const combinedController = new AbortController();
    const listener = ()=>{
        const reason = signals.find((s)=>s.aborted)?.reason;
        combinedController.abort(reason);
        signals.forEach((s)=>s.removeEventListener("abort", listener));
    };
    signals.forEach((s)=>s.addEventListener("abort", listener, {
            once: true
        }));
    const hasAlreadyAbortedSignal = signals.find((s)=>s.aborted);
    if (hasAlreadyAbortedSignal) combinedController.abort(hasAlreadyAbortedSignal.reason);
    return {
        signal: combinedController.signal,
        dispose: ()=>{
            signals.forEach((s)=>s.removeEventListener("abort", listener));
        }
    };
}
/**
* Combine multiple callbacks into a single callback.
* @param callback1 - The first callback to combine.
* @param callback2 - The second callback to combine.
* @returns A single callback that is a combination of the input callbacks.
*/ const combineCallbacks = (callback1, callback2)=>{
    if (!callback1 && !callback2) return;
    if (!callback1) return callback2;
    if (!callback2) return callback1;
    if (Array.isArray(callback1) && Array.isArray(callback2)) return [
        ...callback1,
        ...callback2
    ];
    if (Array.isArray(callback1)) return [
        ...callback1,
        callback2
    ];
    if (Array.isArray(callback2)) return [
        callback1,
        ...callback2
    ];
    return [
        callback1,
        callback2
    ];
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/types.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Call",
    ()=>Call,
    "isCall",
    ()=>isCall
]);
//#region src/pregel/types.ts
var Call = class {
    func;
    name;
    input;
    retry;
    cache;
    callbacks;
    __lg_type = "call";
    constructor({ func, name, input, retry, cache, callbacks }){
        this.func = func;
        this.name = name;
        this.input = input;
        this.retry = retry;
        this.cache = cache;
        this.callbacks = callbacks;
    }
};
function isCall(value) {
    return typeof value === "object" && value !== null && "__lg_type" in value && value.__lg_type === "call";
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/call.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "call",
    ()=>call,
    "getRunnableForEntrypoint",
    ()=>getRunnableForEntrypoint,
    "getRunnableForFunc",
    ()=>getRunnableForFunc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/write.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/base.js [app-route] (ecmascript)");
;
;
;
;
;
//#region src/pregel/call.ts
/**
* Wraps a user function in a Runnable that writes the returned value to the RETURN channel.
*/ function getRunnableForFunc(name, func) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableSequence"]({
        name,
        first: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableCallable"]({
            func: (input)=>func(...input),
            name,
            trace: false,
            recurse: false
        }),
        last: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"]([
            {
                channel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RETURN"],
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PASSTHROUGH"]
            }
        ], [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
        ])
    });
}
function getRunnableForEntrypoint(name, func) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableCallable"]({
        func: (input, config)=>{
            return func(input, config);
        },
        name,
        trace: false,
        recurse: false
    });
}
function call({ func, name, cache, retry }, ...args) {
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].getRunnableConfig();
    if (typeof config.configurable?.["__pregel_call"] === "function") return config.configurable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CALL"]](func, name, args, {
        retry,
        cache,
        callbacks: config.callbacks
    });
    throw new Error("Async local storage not initialized. Please call initializeAsyncLocalStorageSingleton() before using this function.");
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/algo.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_applyWrites",
    ()=>_applyWrites,
    "_localRead",
    ()=>_localRead,
    "_prepareNextTasks",
    ()=>_prepareNextTasks,
    "_prepareSingleTask",
    ()=>_prepareSingleTask,
    "increment",
    ()=>increment,
    "sanitizeUntrackedValuesInSend",
    ()=>sanitizeUntrackedValuesInSend,
    "shouldInterrupt",
    ()=>shouldInterrupt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/hash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/io.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$call$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/call.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$id$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/id.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/config.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
//#region src/pregel/algo.ts
const increment = (current)=>{
    return current !== void 0 ? current + 1 : 1;
};
function triggersNextStep(updatedChannels, triggerToNodes) {
    if (triggerToNodes == null) return false;
    for (const chan of updatedChannels)if (triggerToNodes[chan]) return true;
    return false;
}
function maxChannelMapVersion(channelVersions) {
    let maxVersion;
    for(const chan in channelVersions){
        if (!Object.prototype.hasOwnProperty.call(channelVersions, chan)) continue;
        if (maxVersion == null) maxVersion = channelVersions[chan];
        else maxVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maxChannelVersion"])(maxVersion, channelVersions[chan]);
    }
    return maxVersion;
}
function shouldInterrupt(checkpoint, interruptNodes, tasks) {
    const nullVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNullChannelVersion"])(checkpoint.channel_versions);
    const seen = checkpoint.versions_seen["__interrupt__"] ?? {};
    let anyChannelUpdated = false;
    if ((checkpoint.channel_versions["__start__"] ?? nullVersion) > (seen["__start__"] ?? nullVersion)) anyChannelUpdated = true;
    else for(const chan in checkpoint.channel_versions){
        if (!Object.prototype.hasOwnProperty.call(checkpoint.channel_versions, chan)) continue;
        if (checkpoint.channel_versions[chan] > (seen[chan] ?? nullVersion)) {
            anyChannelUpdated = true;
            break;
        }
    }
    const anyTriggeredNodeInInterruptNodes = tasks.some((task)=>interruptNodes === "*" ? !task.config?.tags?.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]) : interruptNodes.includes(task.name));
    return anyChannelUpdated && anyTriggeredNodeInInterruptNodes;
}
function _localRead(checkpoint, channels, task, select, fresh = false) {
    let updated = /* @__PURE__ */ new Set();
    if (!Array.isArray(select)) {
        for (const [c] of task.writes)if (c === select) {
            updated = new Set([
                c
            ]);
            break;
        }
        updated = updated || /* @__PURE__ */ new Set();
    } else updated = new Set(select.filter((c)=>task.writes.some(([key, _])=>key === c)));
    let values;
    if (fresh && updated.size > 0) {
        const localChannels = Object.fromEntries(Object.entries(channels).filter(([k, _])=>updated.has(k)));
        const newCheckpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCheckpoint"])(checkpoint, localChannels, -1);
        const newChannels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyChannels"])(localChannels, newCheckpoint);
        _applyWrites((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["copyCheckpoint"])(newCheckpoint), newChannels, [
            task
        ], void 0, void 0);
        values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readChannels"])({
            ...channels,
            ...newChannels
        }, select);
    } else values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readChannels"])(channels, select);
    return values;
}
function _localWrite(commit, processes, writes) {
    for (const [chan, value] of writes)if ([
        "__pregel_push",
        "__pregel_tasks"
    ].includes(chan) && value != null) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSend"])(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Invalid packet type, expected SendProtocol, got ${JSON.stringify(value)}`);
        if (!(value.node in processes)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Invalid node name "${value.node}" in Send packet`);
    }
    commit(writes);
}
const IGNORE = new Set([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NO_WRITES"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PUSH"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESUME"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RETURN"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR"]
]);
function _applyWrites(checkpoint, channels, tasks, getNextVersion, triggerToNodes) {
    tasks.sort((a, b)=>{
        const aPath = a.path?.slice(0, 3) || [];
        const bPath = b.path?.slice(0, 3) || [];
        for(let i = 0; i < Math.min(aPath.length, bPath.length); i += 1){
            if (aPath[i] < bPath[i]) return -1;
            if (aPath[i] > bPath[i]) return 1;
        }
        return aPath.length - bPath.length;
    });
    const bumpStep = tasks.some((task)=>task.triggers.length > 0);
    const onlyChannels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOnlyChannels"])(channels);
    for (const task of tasks){
        checkpoint.versions_seen[task.name] ??= {};
        for (const chan of task.triggers)if (chan in checkpoint.channel_versions) checkpoint.versions_seen[task.name][chan] = checkpoint.channel_versions[chan];
    }
    let maxVersion = maxChannelMapVersion(checkpoint.channel_versions);
    const channelsToConsume = new Set(tasks.flatMap((task)=>task.triggers).filter((chan)=>!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESERVED"].includes(chan)));
    let usedNewVersion = false;
    for (const chan of channelsToConsume)if (chan in onlyChannels && onlyChannels[chan].consume()) {
        if (getNextVersion !== void 0) {
            checkpoint.channel_versions[chan] = getNextVersion(maxVersion);
            usedNewVersion = true;
        }
    }
    const pendingWritesByChannel = {};
    for (const task of tasks)for (const [chan, val] of task.writes)if (IGNORE.has(chan)) {} else if (chan in onlyChannels) {
        pendingWritesByChannel[chan] ??= [];
        pendingWritesByChannel[chan].push(val);
    }
    if (maxVersion != null && getNextVersion != null) maxVersion = usedNewVersion ? getNextVersion(maxVersion) : maxVersion;
    const updatedChannels = /* @__PURE__ */ new Set();
    for (const [chan, vals] of Object.entries(pendingWritesByChannel))if (chan in onlyChannels) {
        const channel = onlyChannels[chan];
        let updated;
        try {
            updated = channel.update(vals);
        } catch (e) {
            if (e.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"].unminifiable_name) {
                const wrappedError = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Invalid update for channel "${chan}" with values ${JSON.stringify(vals)}: ${e.message}`);
                wrappedError.lc_error_code = e.lc_error_code;
                throw wrappedError;
            } else throw e;
        }
        if (updated && getNextVersion !== void 0) {
            checkpoint.channel_versions[chan] = getNextVersion(maxVersion);
            if (channel.isAvailable()) updatedChannels.add(chan);
        }
    }
    if (bumpStep) for(const chan in onlyChannels){
        if (!Object.prototype.hasOwnProperty.call(onlyChannels, chan)) continue;
        const channel = onlyChannels[chan];
        if (channel.isAvailable() && !updatedChannels.has(chan)) {
            if (channel.update([]) && getNextVersion !== void 0) {
                checkpoint.channel_versions[chan] = getNextVersion(maxVersion);
                if (channel.isAvailable()) updatedChannels.add(chan);
            }
        }
    }
    if (bumpStep && !triggersNextStep(updatedChannels, triggerToNodes)) for(const chan in onlyChannels){
        if (!Object.prototype.hasOwnProperty.call(onlyChannels, chan)) continue;
        const channel = onlyChannels[chan];
        if (channel.finish() && getNextVersion !== void 0) {
            checkpoint.channel_versions[chan] = getNextVersion(maxVersion);
            if (channel.isAvailable()) updatedChannels.add(chan);
        }
    }
    return updatedChannels;
}
function* candidateNodes(checkpoint, processes, extra) {
    if (extra.updatedChannels != null && extra.triggerToNodes != null) {
        const triggeredNodes = /* @__PURE__ */ new Set();
        for (const channel of extra.updatedChannels){
            const nodeIds = extra.triggerToNodes[channel];
            for (const id of nodeIds ?? [])triggeredNodes.add(id);
        }
        yield* [
            ...triggeredNodes
        ].sort();
        return;
    }
    if ((()=>{
        for(const chan in checkpoint.channel_versions)if (checkpoint.channel_versions[chan] !== null) return false;
        return true;
    })()) return;
    for(const name in processes){
        if (!Object.prototype.hasOwnProperty.call(processes, name)) continue;
        yield name;
    }
}
/**
* Prepare the set of tasks that will make up the next Pregel step.
* This is the union of all PUSH tasks (Sends) and PULL tasks (nodes triggered
* by edges).
*/ function _prepareNextTasks(checkpoint, pendingWrites, processes, channels, config, forExecution, extra) {
    const tasks = {};
    const tasksChannel = channels[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TASKS"]];
    if (tasksChannel?.isAvailable()) {
        const len = tasksChannel.get().length;
        for(let i = 0; i < len; i += 1){
            const task = _prepareSingleTask([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PUSH"],
                i
            ], checkpoint, pendingWrites, processes, channels, config, forExecution, extra);
            if (task !== void 0) tasks[task.id] = task;
        }
    }
    for (const name of candidateNodes(checkpoint, processes, extra)){
        const task = _prepareSingleTask([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PULL"],
            name
        ], checkpoint, pendingWrites, processes, channels, config, forExecution, extra);
        if (task !== void 0) tasks[task.id] = task;
    }
    return tasks;
}
/**
* Prepares a single task for the next Pregel step, given a task path, which
* uniquely identifies a PUSH or PULL task within the graph.
*/ function _prepareSingleTask(taskPath, checkpoint, pendingWrites, processes, channels, config, forExecution, extra) {
    const { step, checkpointer, manager } = extra;
    const configurable = config.configurable ?? {};
    const parentNamespace = configurable.checkpoint_ns ?? "";
    if (taskPath[0] === "__pregel_push" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCall"])(taskPath[taskPath.length - 1])) {
        const call = taskPath[taskPath.length - 1];
        const proc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$call$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRunnableForFunc"])(call.name, call.func);
        const triggers = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PUSH"]
        ];
        const checkpointNamespace = parentNamespace === "" ? call.name : `${parentNamespace}|${call.name}`;
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$id$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid5"])(JSON.stringify([
            checkpointNamespace,
            step.toString(),
            call.name,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PUSH"],
            taskPath[1],
            taskPath[2]
        ]), checkpoint.id);
        const taskCheckpointNamespace = `${checkpointNamespace}:${id}`;
        const outputTaskPath = [
            ...taskPath.slice(0, 3),
            true
        ];
        const metadata = {
            langgraph_step: step,
            langgraph_node: call.name,
            langgraph_triggers: triggers,
            langgraph_path: outputTaskPath,
            langgraph_checkpoint_ns: taskCheckpointNamespace,
            checkpoint_ns: taskCheckpointNamespace
        };
        if (forExecution) {
            const writes = [];
            const executionInfo = {
                checkpointId: checkpoint.id,
                checkpointNs: taskCheckpointNamespace,
                taskId: id,
                threadId: configurable.thread_id,
                runId: config.runId != null ? String(config.runId) : void 0,
                nodeAttempt: 1
            };
            return {
                name: call.name,
                input: call.input,
                proc,
                writes,
                config: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(config, {
                        metadata,
                        store: extra.store ?? config.store
                    }), {
                        runName: call.name,
                        callbacks: manager?.getChild(`graph:step:${step}`),
                        configurable: {
                            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_TASK_ID"]]: id,
                            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SEND"]]: (writes_)=>_localWrite((items)=>writes.push(...items), processes, writes_),
                            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_READ"]]: (select_, fresh_ = false)=>_localRead(checkpoint, channels, {
                                    name: call.name,
                                    writes,
                                    triggers,
                                    path: outputTaskPath
                                }, select_, fresh_),
                            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINTER"]]: checkpointer ?? configurable["__pregel_checkpointer"],
                            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_MAP"]]: {
                                ...configurable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_MAP"]],
                                [parentNamespace]: checkpoint.id
                            },
                            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SCRATCHPAD"]]: _scratchpad({
                                pendingWrites: pendingWrites ?? [],
                                taskId: id,
                                currentTaskInput: call.input,
                                resumeMap: config.configurable?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_RESUME_MAP"]],
                                namespaceHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XXH3"])(taskCheckpointNamespace)
                            }),
                            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_PREVIOUS_STATE"]]: checkpoint.channel_values[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PREVIOUS"]],
                            checkpoint_id: void 0,
                            checkpoint_ns: taskCheckpointNamespace
                        }
                    }),
                    executionInfo
                },
                triggers,
                retry_policy: call.retry,
                cache_key: call.cache ? {
                    key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XXH3"])((call.cache.keyFunc ?? JSON.stringify)([
                        call.input
                    ])),
                    ns: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CACHE_NS_WRITES"],
                        call.name ?? "__dynamic__"
                    ],
                    ttl: call.cache.ttl
                } : void 0,
                id,
                path: outputTaskPath,
                writers: []
            };
        } else return {
            id,
            name: call.name,
            interrupts: [],
            path: outputTaskPath
        };
    } else if (taskPath[0] === "__pregel_push") {
        const index = typeof taskPath[1] === "number" ? taskPath[1] : parseInt(taskPath[1], 10);
        if (!channels["__pregel_tasks"]?.isAvailable()) return;
        const sends = channels[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TASKS"]].get();
        if (index < 0 || index >= sends.length) return;
        const packet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSendInterface"])(sends[index]) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSend"])(sends[index]) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Send"](sends[index].node, sends[index].args) : sends[index];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSendInterface"])(packet)) {
            console.warn(`Ignoring invalid packet ${JSON.stringify(packet)} in pending sends.`);
            return;
        }
        if (!(packet.node in processes)) {
            console.warn(`Ignoring unknown node name ${packet.node} in pending sends.`);
            return;
        }
        const triggers = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PUSH"]
        ];
        const checkpointNamespace = parentNamespace === "" ? packet.node : `${parentNamespace}|${packet.node}`;
        const taskId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$id$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid5"])(JSON.stringify([
            checkpointNamespace,
            step.toString(),
            packet.node,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PUSH"],
            index.toString()
        ]), checkpoint.id);
        const taskCheckpointNamespace = `${checkpointNamespace}:${taskId}`;
        let metadata = {
            langgraph_step: step,
            langgraph_node: packet.node,
            langgraph_triggers: triggers,
            langgraph_path: taskPath.slice(0, 3),
            langgraph_checkpoint_ns: taskCheckpointNamespace,
            checkpoint_ns: taskCheckpointNamespace
        };
        if (forExecution) {
            const proc = processes[packet.node];
            const node = proc.getNode();
            if (node !== void 0) {
                if (proc.metadata !== void 0) metadata = {
                    ...metadata,
                    ...proc.metadata
                };
                const writes = [];
                const executionInfo = {
                    checkpointId: checkpoint.id,
                    checkpointNs: taskCheckpointNamespace,
                    taskId,
                    threadId: configurable.thread_id,
                    runId: config.runId != null ? String(config.runId) : void 0,
                    nodeAttempt: 1
                };
                return {
                    name: packet.node,
                    input: packet.args,
                    proc: node,
                    subgraphs: proc.subgraphs,
                    writes,
                    config: {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(config, {
                            metadata,
                            tags: proc.tags,
                            store: extra.store ?? config.store
                        }), {
                            runName: packet.node,
                            callbacks: manager?.getChild(`graph:step:${step}`),
                            configurable: {
                                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_TASK_ID"]]: taskId,
                                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SEND"]]: (writes_)=>_localWrite((items)=>writes.push(...items), processes, writes_),
                                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_READ"]]: (select_, fresh_ = false)=>_localRead(checkpoint, channels, {
                                        name: packet.node,
                                        writes,
                                        triggers,
                                        path: taskPath
                                    }, select_, fresh_),
                                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINTER"]]: checkpointer ?? configurable["__pregel_checkpointer"],
                                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_MAP"]]: {
                                    ...configurable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_MAP"]],
                                    [parentNamespace]: checkpoint.id
                                },
                                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SCRATCHPAD"]]: _scratchpad({
                                    pendingWrites: pendingWrites ?? [],
                                    taskId,
                                    currentTaskInput: packet.args,
                                    resumeMap: config.configurable?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_RESUME_MAP"]],
                                    namespaceHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XXH3"])(taskCheckpointNamespace)
                                }),
                                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_PREVIOUS_STATE"]]: checkpoint.channel_values[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PREVIOUS"]],
                                checkpoint_id: void 0,
                                checkpoint_ns: taskCheckpointNamespace
                            }
                        }),
                        executionInfo
                    },
                    triggers,
                    retry_policy: proc.retryPolicy,
                    cache_key: proc.cachePolicy ? {
                        key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XXH3"])((proc.cachePolicy.keyFunc ?? JSON.stringify)([
                            packet.args
                        ])),
                        ns: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CACHE_NS_WRITES"],
                            proc.name ?? "__dynamic__",
                            packet.node
                        ],
                        ttl: proc.cachePolicy.ttl
                    } : void 0,
                    id: taskId,
                    path: taskPath,
                    writers: proc.getWriters()
                };
            }
        } else return {
            id: taskId,
            name: packet.node,
            interrupts: [],
            path: taskPath
        };
    } else if (taskPath[0] === "__pregel_pull") {
        const name = taskPath[1].toString();
        const proc = processes[name];
        if (proc === void 0) return;
        if (pendingWrites?.length) {
            const checkpointNamespace = parentNamespace === "" ? name : `${parentNamespace}|${name}`;
            const taskId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$id$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid5"])(JSON.stringify([
                checkpointNamespace,
                step.toString(),
                name,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PULL"],
                name
            ]), checkpoint.id);
            if (pendingWrites.some((w)=>w[0] === taskId && w[1] !== "__error__")) return;
        }
        const nullVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNullChannelVersion"])(checkpoint.channel_versions);
        if (nullVersion === void 0) return;
        const seen = checkpoint.versions_seen[name] ?? {};
        const trigger = proc.triggers.find((chan)=>{
            if (!channels[chan].isAvailable()) return false;
            return (checkpoint.channel_versions[chan] ?? nullVersion) > (seen[chan] ?? nullVersion);
        });
        if (trigger !== void 0) {
            const val = _procInput(proc, channels, forExecution);
            if (val === void 0) return;
            const checkpointNamespace = parentNamespace === "" ? name : `${parentNamespace}|${name}`;
            const taskId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$id$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid5"])(JSON.stringify([
                checkpointNamespace,
                step.toString(),
                name,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PULL"],
                [
                    trigger
                ]
            ]), checkpoint.id);
            const taskCheckpointNamespace = `${checkpointNamespace}:${taskId}`;
            let metadata = {
                langgraph_step: step,
                langgraph_node: name,
                langgraph_triggers: [
                    trigger
                ],
                langgraph_path: taskPath,
                langgraph_checkpoint_ns: taskCheckpointNamespace,
                checkpoint_ns: taskCheckpointNamespace
            };
            if (forExecution) {
                const node = proc.getNode();
                if (node !== void 0) {
                    if (proc.metadata !== void 0) metadata = {
                        ...metadata,
                        ...proc.metadata
                    };
                    const writes = [];
                    const executionInfo = {
                        checkpointId: checkpoint.id,
                        checkpointNs: taskCheckpointNamespace,
                        taskId,
                        threadId: configurable.thread_id,
                        runId: config.runId != null ? String(config.runId) : void 0,
                        nodeAttempt: 1
                    };
                    return {
                        name,
                        input: val,
                        proc: node,
                        subgraphs: proc.subgraphs,
                        writes,
                        config: {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(config, {
                                metadata,
                                tags: proc.tags,
                                store: extra.store ?? config.store
                            }), {
                                runName: name,
                                callbacks: manager?.getChild(`graph:step:${step}`),
                                configurable: {
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_TASK_ID"]]: taskId,
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SEND"]]: (writes_)=>_localWrite((items)=>{
                                            writes.push(...items);
                                        }, processes, writes_),
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_READ"]]: (select_, fresh_ = false)=>_localRead(checkpoint, channels, {
                                            name,
                                            writes,
                                            triggers: [
                                                trigger
                                            ],
                                            path: taskPath
                                        }, select_, fresh_),
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINTER"]]: checkpointer ?? configurable["__pregel_checkpointer"],
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_MAP"]]: {
                                        ...configurable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_MAP"]],
                                        [parentNamespace]: checkpoint.id
                                    },
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SCRATCHPAD"]]: _scratchpad({
                                        pendingWrites: pendingWrites ?? [],
                                        taskId,
                                        currentTaskInput: val,
                                        resumeMap: config.configurable?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_RESUME_MAP"]],
                                        namespaceHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XXH3"])(taskCheckpointNamespace)
                                    }),
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_PREVIOUS_STATE"]]: checkpoint.channel_values[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PREVIOUS"]],
                                    checkpoint_id: void 0,
                                    checkpoint_ns: taskCheckpointNamespace
                                }
                            }),
                            executionInfo
                        },
                        triggers: [
                            trigger
                        ],
                        retry_policy: proc.retryPolicy,
                        cache_key: proc.cachePolicy ? {
                            key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XXH3"])((proc.cachePolicy.keyFunc ?? JSON.stringify)([
                                val
                            ])),
                            ns: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CACHE_NS_WRITES"],
                                proc.name ?? "__dynamic__",
                                name
                            ],
                            ttl: proc.cachePolicy.ttl
                        } : void 0,
                        id: taskId,
                        path: taskPath,
                        writers: proc.getWriters()
                    };
                }
            } else return {
                id: taskId,
                name,
                interrupts: [],
                path: taskPath
            };
        }
    }
}
/**
*  Function injected under CONFIG_KEY_READ in task config, to read current state.
*  Used by conditional edges to read a copy of the state with reflecting the writes
*  from that node only.
*
* @internal
*/ function _procInput(proc, channels, forExecution) {
    let val;
    if (typeof proc.channels === "object" && !Array.isArray(proc.channels)) {
        val = {};
        for (const [k, chan] of Object.entries(proc.channels))if (proc.triggers.includes(chan)) try {
            val[k] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readChannel"])(channels, chan, false);
        } catch (e) {
            if (e.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"].unminifiable_name) return;
            else throw e;
        }
        else if (chan in channels) try {
            val[k] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readChannel"])(channels, chan, false);
        } catch (e) {
            if (e.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"].unminifiable_name) continue;
            else throw e;
        }
    } else if (Array.isArray(proc.channels)) {
        let successfulRead = false;
        for (const chan of proc.channels)try {
            val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readChannel"])(channels, chan, false);
            successfulRead = true;
            break;
        } catch (e) {
            if (e.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"].unminifiable_name) continue;
            else throw e;
        }
        if (!successfulRead) return;
    } else throw new Error(`Invalid channels type, expected list or dict, got ${proc.channels}`);
    if (forExecution && proc.mapper !== void 0) val = proc.mapper(val);
    return val;
}
/**
* Remove any values belonging to UntrackedValue channels from a Send packet
* before checkpointing.
*
* Send is often called with state to be passed to the destination node,
* which may contain UntrackedValues at the top level.
*
* @internal
*/ function sanitizeUntrackedValuesInSend(packet, channels) {
    if (typeof packet.args !== "object" || packet.args === null) return packet;
    const sanitizedArg = {};
    for (const [key, value] of Object.entries(packet.args)){
        const channel = channels[key];
        if (!channel || channel.lc_graph_name !== "UntrackedValue") sanitizedArg[key] = value;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Send"](packet.node, sanitizedArg);
}
function _scratchpad({ pendingWrites, taskId, currentTaskInput, resumeMap, namespaceHash }) {
    const nullResume = pendingWrites.find(([writeTaskId, chan])=>writeTaskId === "00000000-0000-0000-0000-000000000000" && chan === "__resume__")?.[2];
    const scratchpad = {
        callCounter: 0,
        interruptCounter: -1,
        resume: (()=>{
            const result = pendingWrites.filter(([writeTaskId, chan])=>writeTaskId === taskId && chan === "__resume__").flatMap(([_writeTaskId, _chan, resume])=>resume);
            if (resumeMap != null && namespaceHash in resumeMap) {
                const mappedResume = resumeMap[namespaceHash];
                result.push(mappedResume);
            }
            return result;
        })(),
        nullResume,
        subgraphCounter: 0,
        currentTaskInput,
        consumeNullResume: ()=>{
            if (scratchpad.nullResume) {
                delete scratchpad.nullResume;
                pendingWrites.splice(pendingWrites.findIndex(([writeTaskId, chan])=>writeTaskId === "00000000-0000-0000-0000-000000000000" && chan === "__resume__"), 1);
                return nullResume;
            }
        }
    };
    return scratchpad;
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/debug.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapDebugCheckpoint",
    ()=>mapDebugCheckpoint,
    "mapDebugTaskResults",
    ()=>mapDebugTaskResults,
    "mapDebugTasks",
    ()=>mapDebugTasks,
    "printStepCheckpoint",
    ()=>printStepCheckpoint,
    "printStepTasks",
    ()=>printStepTasks,
    "printStepWrites",
    ()=>printStepWrites,
    "tasksWithWrites",
    ()=>tasksWithWrites
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/io.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$subgraph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/subgraph.js [app-route] (ecmascript)");
;
;
;
//#region src/pregel/debug.ts
const COLORS_MAP = {
    blue: {
        start: "\x1B[34m",
        end: "\x1B[0m"
    },
    green: {
        start: "\x1B[32m",
        end: "\x1B[0m"
    },
    yellow: {
        start: "\x1B[33;1m",
        end: "\x1B[0m"
    }
};
/**
* Wrap some text in a color for printing to the console.
*/ const wrap = (color, text)=>`${color.start}${text}${color.end}`;
function* mapDebugTasks(tasks) {
    for (const { id, name, input, config, triggers, writes } of tasks){
        if (config?.tags?.includes("langsmith:hidden")) continue;
        yield {
            id,
            name,
            input,
            triggers,
            interrupts: writes.filter(([writeId, n])=>{
                return writeId === id && n === "__interrupt__";
            }).map(([, v])=>{
                return v;
            })
        };
    }
}
function isMultipleChannelWrite(value) {
    if (typeof value !== "object" || value === null) return false;
    return "$writes" in value && Array.isArray(value.$writes);
}
function mapTaskResultWrites(writes) {
    const result = {};
    for (const [channel, value] of writes){
        const strChannel = String(channel);
        if (strChannel in result) {
            const channelWrites = isMultipleChannelWrite(result[strChannel]) ? result[strChannel].$writes : [
                result[strChannel]
            ];
            channelWrites.push(value);
            result[strChannel] = {
                $writes: channelWrites
            };
        } else result[strChannel] = value;
    }
    return result;
}
function* mapDebugTaskResults(tasks, streamChannels) {
    for (const [{ id, name, config }, writes] of tasks){
        if (config?.tags?.includes("langsmith:hidden")) continue;
        yield {
            id,
            name,
            result: mapTaskResultWrites(writes.filter(([channel])=>{
                return Array.isArray(streamChannels) ? streamChannels.includes(channel) : channel === streamChannels;
            })),
            interrupts: writes.filter((w)=>w[0] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]).map((w)=>w[1])
        };
    }
}
function* mapDebugCheckpoint(config, channels, streamChannels, metadata, tasks, pendingWrites, parentConfig, outputKeys) {
    function formatConfig(config) {
        const pyConfig = {};
        if (config.callbacks != null) pyConfig.callbacks = config.callbacks;
        if (config.configurable != null) pyConfig.configurable = config.configurable;
        if (config.maxConcurrency != null) pyConfig.max_concurrency = config.maxConcurrency;
        if (config.metadata != null) pyConfig.metadata = config.metadata;
        if (config.recursionLimit != null) pyConfig.recursion_limit = config.recursionLimit;
        if (config.runId != null) pyConfig.run_id = config.runId;
        if (config.runName != null) pyConfig.run_name = config.runName;
        if (config.tags != null) pyConfig.tags = config.tags;
        return pyConfig;
    }
    const parentNs = config.configurable?.checkpoint_ns;
    const taskStates = {};
    for (const task of tasks){
        if (!(task.subgraphs?.length ? task.subgraphs : [
            task.proc
        ]).find(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$subgraph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findSubgraphPregel"])) continue;
        let taskNs = `${task.name}:${task.id}`;
        if (parentNs) taskNs = `${parentNs}|${taskNs}`;
        taskStates[task.id] = {
            configurable: {
                thread_id: config.configurable?.thread_id,
                checkpoint_ns: taskNs
            }
        };
    }
    yield {
        config: formatConfig(config),
        values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readChannels"])(channels, streamChannels),
        metadata,
        next: tasks.map((task)=>task.name),
        tasks: tasksWithWrites(tasks, pendingWrites, taskStates, outputKeys),
        parentConfig: parentConfig ? formatConfig(parentConfig) : void 0
    };
}
function tasksWithWrites(tasks, pendingWrites, states, outputKeys) {
    return tasks.map((task)=>{
        const error = pendingWrites.find(([id, n])=>id === task.id && n === "__error__")?.[2];
        const interrupts = pendingWrites.filter(([id, n])=>id === task.id && n === "__interrupt__").map(([, , v])=>v);
        const result = (()=>{
            if (error || interrupts.length || !pendingWrites.length) return void 0;
            const idx = pendingWrites.findIndex(([tid, n])=>tid === task.id && n === "__return__");
            if (idx >= 0) return pendingWrites[idx][2];
            if (typeof outputKeys === "string") return pendingWrites.find(([tid, n])=>tid === task.id && n === outputKeys)?.[2];
            if (Array.isArray(outputKeys)) {
                const results = pendingWrites.filter(([tid, n])=>tid === task.id && outputKeys.includes(n)).map(([, n, v])=>[
                        n,
                        v
                    ]);
                if (!results.length) return void 0;
                return mapTaskResultWrites(results);
            }
        })();
        if (error) return {
            id: task.id,
            name: task.name,
            path: task.path,
            error,
            interrupts,
            result
        };
        const taskState = states?.[task.id];
        return {
            id: task.id,
            name: task.name,
            path: task.path,
            interrupts,
            ...taskState !== void 0 ? {
                state: taskState
            } : {},
            result
        };
    });
}
function printStepCheckpoint(step, channels, whitelist) {
    console.log([
        `${wrap(COLORS_MAP.blue, `[${step}:checkpoint]`)}`,
        `\x1b[1m State at the end of step ${step}:\x1b[0m\n`,
        JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readChannels"])(channels, whitelist), null, 2)
    ].join(""));
}
function printStepTasks(step, nextTasks) {
    const nTasks = nextTasks.length;
    console.log([
        `${wrap(COLORS_MAP.blue, `[${step}:tasks]`)}`,
        `\x1b[1m Starting step ${step} with ${nTasks} task${nTasks === 1 ? "" : "s"}:\x1b[0m\n`,
        nextTasks.map((task)=>`- ${wrap(COLORS_MAP.green, String(task.name))} -> ${JSON.stringify(task.input, null, 2)}`).join("\n")
    ].join(""));
}
function printStepWrites(step, writes, whitelist) {
    const byChannel = {};
    for (const [channel, value] of writes)if (whitelist.includes(channel)) {
        if (!byChannel[channel]) byChannel[channel] = [];
        byChannel[channel].push(value);
    }
    console.log([
        `${wrap(COLORS_MAP.blue, `[${step}:writes]`)}`,
        `\x1b[1m Finished step ${step} with writes to ${Object.keys(byChannel).length} channel${Object.keys(byChannel).length !== 1 ? "s" : ""}:\x1b[0m\n`,
        Object.entries(byChannel).map(([name, vals])=>`- ${wrap(COLORS_MAP.yellow, name)} -> ${vals.map((v)=>JSON.stringify(v)).join(", ")}`).join("\n")
    ].join(""));
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/stream.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IterableReadableStreamWithAbortSignal",
    ()=>IterableReadableStreamWithAbortSignal,
    "IterableReadableWritableStream",
    ()=>IterableReadableWritableStream,
    "StreamToolsHandler",
    ()=>StreamToolsHandler,
    "toEventStream",
    ()=>toEventStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/utils/stream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/callbacks/base.js [app-route] (ecmascript)");
;
;
;
//#region src/pregel/stream.ts
/**
* A wrapper around an IterableReadableStream that allows for aborting the stream when
* {@link cancel} is called.
*/ var IterableReadableStreamWithAbortSignal = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStream"] {
    _abortController;
    _innerReader;
    /**
	* @param readableStream - The stream to wrap.
	* @param abortController - The abort controller to use. Optional. One will be created if not provided.
	*/ constructor(readableStream, abortController){
        const reader = readableStream.getReader();
        const ac = abortController ?? new AbortController();
        super({
            start (controller) {
                return pump();
                //TURBOPACK unreachable
                ;
                function pump() {
                    return reader.read().then(({ done, value })=>{
                        if (done) {
                            controller.close();
                            return;
                        }
                        controller.enqueue(value);
                        return pump();
                    });
                }
            }
        });
        this._abortController = ac;
        this._innerReader = reader;
    }
    /**
	* Aborts the stream, abandoning any pending operations in progress. Calling this triggers an
	* {@link AbortSignal} that is propagated to the tasks that are producing the data for this stream.
	* @param reason - The reason for aborting the stream. Optional.
	*/ async cancel(reason) {
        this._abortController.abort(reason);
        this._innerReader.releaseLock();
    }
    /**
	* The {@link AbortSignal} for the stream. Aborted when {@link cancel} is called.
	*/ get signal() {
        return this._abortController.signal;
    }
};
var IterableReadableWritableStream = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStream"] {
    modes;
    controller;
    passthroughFn;
    _closed = false;
    get closed() {
        return this._closed;
    }
    constructor(params){
        let streamControllerPromiseResolver;
        const streamControllerPromise = new Promise((resolve)=>{
            streamControllerPromiseResolver = resolve;
        });
        super({
            start: (controller)=>{
                streamControllerPromiseResolver(controller);
            }
        });
        streamControllerPromise.then((controller)=>{
            this.controller = controller;
        });
        this.passthroughFn = params.passthroughFn;
        this.modes = params.modes;
    }
    push(chunk) {
        this.passthroughFn?.(chunk);
        this.controller.enqueue(chunk);
    }
    close() {
        try {
            this.controller.close();
        } catch  {} finally{
            this._closed = true;
        }
    }
    error(e) {
        this.controller.error(e);
    }
};
/**
* A callback handler that implements stream_mode=tools.
* Emits on_tool_start, on_tool_event, on_tool_end, on_tool_error events.
*/ var StreamToolsHandler = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseCallbackHandler"] {
    name = "StreamToolsHandler";
    streamFn;
    runs = {};
    constructor(streamFn){
        super();
        this.streamFn = streamFn;
    }
    handleToolStart(_tool, input, runId, _parentRunId, tags, metadata, runName, toolCallId) {
        if (!metadata || tags && tags.includes("langsmith:hidden")) return;
        const ns = metadata.langgraph_checkpoint_ns?.split("|") ?? [];
        const info = {
            ns,
            toolCallId,
            toolName: runName ?? "unknown",
            input
        };
        this.runs[runId] = info;
        this.streamFn([
            ns,
            "tools",
            {
                event: "on_tool_start",
                toolCallId: info.toolCallId,
                name: info.toolName,
                input
            }
        ]);
    }
    handleToolEvent(chunk, runId) {
        const info = this.runs[runId];
        if (!info) return;
        this.streamFn([
            info.ns,
            "tools",
            {
                event: "on_tool_event",
                toolCallId: info.toolCallId,
                name: info.toolName,
                data: chunk
            }
        ]);
    }
    handleToolEnd(output, runId) {
        const info = this.runs[runId];
        delete this.runs[runId];
        if (!info) return;
        this.streamFn([
            info.ns,
            "tools",
            {
                event: "on_tool_end",
                toolCallId: info.toolCallId,
                name: info.toolName,
                output
            }
        ]);
    }
    handleToolError(err, runId) {
        const info = this.runs[runId];
        delete this.runs[runId];
        if (!info) return;
        this.streamFn([
            info.ns,
            "tools",
            {
                event: "on_tool_error",
                toolCallId: info.toolCallId,
                name: info.toolName,
                error: err
            }
        ]);
    }
};
function _stringifyAsDict(obj) {
    return JSON.stringify(obj, function(key, value) {
        const rawValue = this[key];
        if (rawValue != null && typeof rawValue === "object" && "toDict" in rawValue && typeof rawValue.toDict === "function") {
            const { type, data } = rawValue.toDict();
            return {
                ...data,
                type
            };
        }
        return value;
    });
}
function _serializeError(error) {
    if (error instanceof Error) return {
        error: error.name,
        message: error.message
    };
    return {
        error: "Error",
        message: JSON.stringify(error)
    };
}
function _isRunnableConfig(config) {
    if (typeof config !== "object" || config == null) return false;
    return "configurable" in config && typeof config.configurable === "object" && config.configurable != null;
}
function _extractCheckpointFromConfig(config) {
    if (!_isRunnableConfig(config) || !config.configurable.thread_id) return null;
    return {
        thread_id: config.configurable.thread_id,
        checkpoint_ns: config.configurable.checkpoint_ns || "",
        checkpoint_id: config.configurable.checkpoint_id || null,
        checkpoint_map: config.configurable.checkpoint_map || null
    };
}
function _serializeConfig(config) {
    if (_isRunnableConfig(config)) {
        const configurable = Object.fromEntries(Object.entries(config.configurable).filter(([key])=>!key.startsWith("__")));
        const newConfig = {
            ...config,
            configurable
        };
        delete newConfig.callbacks;
        return newConfig;
    }
    return config;
}
function _serializeCheckpoint(payload) {
    const result = {
        ...payload,
        checkpoint: _extractCheckpointFromConfig(payload.config),
        parent_checkpoint: _extractCheckpointFromConfig(payload.parentConfig),
        config: _serializeConfig(payload.config),
        parent_config: _serializeConfig(payload.parentConfig),
        tasks: payload.tasks.map((task)=>{
            if (_isRunnableConfig(task.state)) {
                const checkpoint = _extractCheckpointFromConfig(task.state);
                if (checkpoint != null) {
                    const cloneTask = {
                        ...task,
                        checkpoint
                    };
                    delete cloneTask.state;
                    return cloneTask;
                }
            }
            return task;
        })
    };
    delete result.parentConfig;
    return result;
}
function toEventStream(stream) {
    const encoder = new TextEncoder();
    return new ReadableStream({
        async start (controller) {
            const enqueueChunk = (sse)=>{
                controller.enqueue(encoder.encode(`event: ${sse.event}\ndata: ${_stringifyAsDict(sse.data)}\n\n`));
            };
            try {
                for await (const payload of stream){
                    const [ns, mode, chunk] = payload;
                    let data = chunk;
                    if (mode === "debug") {
                        const debugChunk = chunk;
                        if (debugChunk.type === "checkpoint") data = {
                            ...debugChunk,
                            payload: _serializeCheckpoint(debugChunk.payload)
                        };
                    }
                    if (mode === "checkpoints") data = _serializeCheckpoint(chunk);
                    enqueueChunk({
                        event: ns?.length ? `${mode}|${ns.join("|")}` : mode,
                        data
                    });
                }
            } catch (error) {
                enqueueChunk({
                    event: "error",
                    data: _serializeError(error)
                });
            }
            controller.close();
        }
    });
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/loop.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PregelLoop",
    ()=>PregelLoop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/hash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/io.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/algo.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$debug$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/debug.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/stream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$store$2f$batch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/store/batch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$cache$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/cache/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/base.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
//#region src/pregel/loop.ts
const INPUT_DONE = Symbol.for("INPUT_DONE");
const INPUT_RESUMING = Symbol.for("INPUT_RESUMING");
const DEFAULT_LOOP_LIMIT = 25;
function createDuplexStream(...streams) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableWritableStream"]({
        passthroughFn: (value)=>{
            for (const stream of streams)if (stream.modes.has(value[1])) stream.push(value);
        },
        modes: new Set(streams.flatMap((s)=>Array.from(s.modes)))
    });
}
var AsyncBatchedCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$cache$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseCache"] {
    cache;
    queue = Promise.resolve();
    constructor(cache){
        super();
        this.cache = cache;
    }
    async get(keys) {
        return this.enqueueOperation("get", keys);
    }
    async set(pairs) {
        return this.enqueueOperation("set", pairs);
    }
    async clear(namespaces) {
        return this.enqueueOperation("clear", namespaces);
    }
    async stop() {
        await this.queue;
    }
    enqueueOperation(type, ...args) {
        const newPromise = this.queue.then(()=>{
            return this.cache[type](...args);
        });
        this.queue = newPromise.then(()=>void 0, ()=>void 0);
        return newPromise;
    }
};
var PregelLoop = class PregelLoop {
    input;
    output;
    config;
    checkpointer;
    checkpointerGetNextVersion;
    channels;
    checkpoint;
    checkpointIdSaved;
    checkpointConfig;
    checkpointMetadata;
    checkpointNamespace;
    checkpointPendingWrites = [];
    checkpointPreviousVersions;
    step;
    stop;
    durability;
    outputKeys;
    streamKeys;
    nodes;
    skipDoneTasks;
    prevCheckpointConfig;
    updatedChannels;
    status = "pending";
    tasks = {};
    stream;
    checkpointerPromises = /* @__PURE__ */ new Set();
    isNested;
    _checkpointerChainedPromise = Promise.resolve();
    /**
	* Track a checkpointer promise, removing it from the set on success.
	* Failed promises are kept so that Promise.all() in the finally block
	* of _streamIterator can surface the error.
	*
	* @internal
	*/ _trackCheckpointerPromise(promise) {
        const tracked = promise.then((value)=>{
            this.checkpointerPromises.delete(tracked);
            return value;
        }, (error)=>{
            throw error;
        });
        this.checkpointerPromises.add(tracked);
    }
    store;
    cache;
    manager;
    interruptAfter;
    interruptBefore;
    toInterrupt = [];
    debug = false;
    triggerToNodes;
    get isResuming() {
        let hasChannelVersions = false;
        if ("__start__" in this.checkpoint.channel_versions) hasChannelVersions = true;
        else for(const chan in this.checkpoint.channel_versions)if (Object.prototype.hasOwnProperty.call(this.checkpoint.channel_versions, chan)) {
            hasChannelVersions = true;
            break;
        }
        const configIsResuming = this.config.configurable?.["__pregel_resuming"] !== void 0 && this.config.configurable?.["__pregel_resuming"];
        const inputIsNullOrUndefined = this.input === null || this.input === void 0;
        const inputIsCommandResuming = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])(this.input) && this.input.resume != null;
        const inputIsResuming = this.input === INPUT_RESUMING;
        const runIdMatchesPrevious = !this.isNested && this.config.metadata?.run_id !== void 0 && this.checkpointMetadata?.run_id !== void 0 && this.config.metadata.run_id === this.checkpointMetadata?.run_id;
        return hasChannelVersions && (configIsResuming || inputIsNullOrUndefined || inputIsCommandResuming || inputIsResuming || runIdMatchesPrevious);
    }
    constructor(params){
        this.input = params.input;
        this.checkpointer = params.checkpointer;
        if (this.checkpointer !== void 0) this.checkpointerGetNextVersion = this.checkpointer.getNextVersion.bind(this.checkpointer);
        else this.checkpointerGetNextVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["increment"];
        this.checkpoint = params.checkpoint;
        this.checkpointMetadata = params.checkpointMetadata;
        this.checkpointPreviousVersions = params.checkpointPreviousVersions;
        this.channels = params.channels;
        this.checkpointPendingWrites = params.checkpointPendingWrites;
        this.step = params.step;
        this.stop = params.stop;
        this.config = params.config;
        this.checkpointConfig = params.checkpointConfig;
        this.isNested = params.isNested;
        this.manager = params.manager;
        this.outputKeys = params.outputKeys;
        this.streamKeys = params.streamKeys;
        this.nodes = params.nodes;
        this.skipDoneTasks = params.skipDoneTasks;
        this.store = params.store;
        this.cache = params.cache ? new AsyncBatchedCache(params.cache) : void 0;
        this.stream = params.stream;
        this.checkpointNamespace = params.checkpointNamespace;
        this.prevCheckpointConfig = params.prevCheckpointConfig;
        this.interruptAfter = params.interruptAfter;
        this.interruptBefore = params.interruptBefore;
        this.durability = params.durability;
        this.debug = params.debug;
        this.triggerToNodes = params.triggerToNodes;
    }
    static async initialize(params) {
        let { config, stream } = params;
        if (stream !== void 0 && config.configurable?.["__pregel_stream"] !== void 0) stream = createDuplexStream(stream, config.configurable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_STREAM"]]);
        const skipDoneTasks = config.configurable ? !("checkpoint_id" in config.configurable) : true;
        const scratchpad = config.configurable?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SCRATCHPAD"]];
        if (config.configurable && scratchpad) {
            if (scratchpad.subgraphCounter > 0) config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(config, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_NS"]]: [
                    config.configurable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_NS"]],
                    scratchpad.subgraphCounter.toString()
                ].join("|")
            });
            scratchpad.subgraphCounter += 1;
        }
        const isNested = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_READ"] in (config.configurable ?? {});
        if (!isNested && config.configurable?.checkpoint_ns !== void 0 && config.configurable?.checkpoint_ns !== "") config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(config, {
            checkpoint_ns: "",
            checkpoint_id: void 0
        });
        let checkpointConfig = config;
        if (config.configurable?.["checkpoint_map"] !== void 0 && config.configurable?.["checkpoint_map"]?.[config.configurable?.checkpoint_ns]) checkpointConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(config, {
            checkpoint_id: config.configurable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_MAP"]][config.configurable?.checkpoint_ns]
        });
        const checkpointNamespace = config.configurable?.checkpoint_ns?.split("|") ?? [];
        const saved = await params.checkpointer?.getTuple(checkpointConfig) ?? {
            config,
            checkpoint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheckpoint"])(),
            metadata: {
                source: "input",
                step: -2,
                parents: {}
            },
            pendingWrites: []
        };
        checkpointConfig = {
            ...config,
            ...saved.config,
            configurable: {
                checkpoint_ns: "",
                ...config.configurable,
                ...saved.config.configurable
            }
        };
        const prevCheckpointConfig = saved.parentConfig;
        const checkpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["copyCheckpoint"])(saved.checkpoint);
        const checkpointMetadata = {
            ...saved.metadata
        };
        const checkpointPendingWrites = saved.pendingWrites ?? [];
        const channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyChannels"])(params.channelSpecs, checkpoint);
        const step = (checkpointMetadata.step ?? 0) + 1;
        const stop = step + (config.recursionLimit ?? DEFAULT_LOOP_LIMIT) + 1;
        const checkpointPreviousVersions = {
            ...checkpoint.channel_versions
        };
        const store = params.store ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$store$2f$batch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncBatchedStore"](params.store) : void 0;
        if (store) await store.start();
        return new PregelLoop({
            input: params.input,
            config,
            checkpointer: params.checkpointer,
            checkpoint,
            checkpointMetadata,
            checkpointConfig,
            prevCheckpointConfig,
            checkpointNamespace,
            channels,
            isNested,
            manager: params.manager,
            skipDoneTasks,
            step,
            stop,
            checkpointPreviousVersions,
            checkpointPendingWrites,
            outputKeys: params.outputKeys ?? [],
            streamKeys: params.streamKeys ?? [],
            nodes: params.nodes,
            stream,
            store,
            cache: params.cache,
            interruptAfter: params.interruptAfter,
            interruptBefore: params.interruptBefore,
            durability: params.durability,
            debug: params.debug,
            triggerToNodes: params.triggerToNodes
        });
    }
    _checkpointerPutAfterPrevious(input) {
        this._checkpointerChainedPromise = this._checkpointerChainedPromise.then(()=>{
            return this.checkpointer?.put(input.config, input.checkpoint, input.metadata, input.newVersions);
        });
        this._trackCheckpointerPromise(this._checkpointerChainedPromise);
    }
    /**
	* Put writes for a task, to be read by the next tick.
	* @param taskId
	* @param writes
	*/ putWrites(taskId, writes) {
        let writesCopy = writes;
        if (writesCopy.length === 0) return;
        if (writesCopy.every(([key])=>key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WRITES_IDX_MAP"])) writesCopy = Array.from(new Map(writesCopy.map((w)=>[
                w[0],
                w
            ])).values());
        let hasUntrackedChannels = false;
        for(const key in this.channels)if (Object.prototype.hasOwnProperty.call(this.channels, key)) {
            if (this.channels[key].lc_graph_name === "UntrackedValue") {
                hasUntrackedChannels = true;
                break;
            }
        }
        let writesToSave = writesCopy;
        if (hasUntrackedChannels) writesToSave = writesCopy.filter(([c])=>{
            const channel = this.channels[c];
            return !channel || channel.lc_graph_name !== "UntrackedValue";
        }).map(([c, v])=>{
            if (c === "__pregel_tasks" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSend"])(v)) return [
                c,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeUntrackedValuesInSend"])(v, this.channels)
            ];
            return [
                c,
                v
            ];
        });
        this.checkpointPendingWrites = this.checkpointPendingWrites.filter((w)=>w[0] !== taskId);
        for (const [c, v] of writesToSave)this.checkpointPendingWrites.push([
            taskId,
            c,
            v
        ]);
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(this.checkpointConfig, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_NS"]]: this.config.configurable?.checkpoint_ns ?? "",
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_ID"]]: this.checkpoint.id
        });
        if (this.durability !== "exit" && this.checkpointer != null) this._trackCheckpointerPromise(this.checkpointer.putWrites(config, writesToSave, taskId));
        if (this.tasks) this._outputWrites(taskId, writesCopy);
        if (!writes.length || !this.cache || !this.tasks) return;
        const task = this.tasks[taskId];
        if (task == null || task.cache_key == null) return;
        if (writes[0][0] === "__error__" || writes[0][0] === "__interrupt__") return;
        this.cache.set([
            {
                key: [
                    task.cache_key.ns,
                    task.cache_key.key
                ],
                value: task.writes,
                ttl: task.cache_key.ttl
            }
        ]);
    }
    _outputWrites(taskId, writes, cached = false) {
        const task = this.tasks[taskId];
        if (task !== void 0) {
            if (task.config !== void 0 && (task.config.tags ?? []).includes("langsmith:hidden")) return;
            if (writes.length > 0) {
                if (writes[0][0] === "__interrupt__") {
                    if (task.path?.[0] === "__pregel_push" && task.path?.[task.path.length - 1] === true) return;
                    const interruptWrites = writes.filter((w)=>w[0] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]).flatMap((w)=>w[1]);
                    this._emit([
                        [
                            "updates",
                            {
                                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]]: interruptWrites
                            }
                        ],
                        [
                            "values",
                            {
                                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]]: interruptWrites
                            }
                        ]
                    ]);
                } else if (writes[0][0] !== "__error__") this._emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIteratorSync"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prefixGenerator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapOutputUpdates"])(this.outputKeys, [
                    [
                        task,
                        writes
                    ]
                ], cached), "updates")));
            }
            if (!cached) this._emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIteratorSync"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prefixGenerator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$debug$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapDebugTaskResults"])([
                [
                    task,
                    writes
                ]
            ], this.streamKeys), "tasks")));
        }
    }
    async _matchCachedWrites() {
        if (!this.cache) return [];
        const matched = [];
        const serializeKey = ([ns, key])=>{
            return `ns:${ns.join(",")}|key:${key}`;
        };
        const keys = [];
        const keyMap = {};
        for (const task of Object.values(this.tasks))if (task.cache_key != null && !task.writes.length) {
            keys.push([
                task.cache_key.ns,
                task.cache_key.key
            ]);
            keyMap[serializeKey([
                task.cache_key.ns,
                task.cache_key.key
            ])] = task;
        }
        if (keys.length === 0) return [];
        const cache = await this.cache.get(keys);
        for (const { key, value } of cache){
            const task = keyMap[serializeKey(key)];
            if (task != null) {
                task.writes.push(...value);
                matched.push({
                    task,
                    result: value
                });
            }
        }
        return matched;
    }
    /**
	* Execute a single iteration of the Pregel loop.
	* Returns true if more iterations are needed.
	* @param params
	*/ async tick(params) {
        if (this.store && !this.store.isRunning) await this.store?.start();
        const { inputKeys = [] } = params;
        if (this.status !== "pending") throw new Error(`Cannot tick when status is no longer "pending". Current status: "${this.status}"`);
        if (![
            INPUT_DONE,
            INPUT_RESUMING
        ].includes(this.input)) await this._first(inputKeys);
        else if (this.toInterrupt.length > 0) {
            this.status = "interrupt_before";
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphInterrupt"]();
        } else if (Object.values(this.tasks).every((task)=>task.writes.length > 0)) {
            const writes = Object.values(this.tasks).flatMap((t)=>t.writes);
            this.updatedChannels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_applyWrites"])(this.checkpoint, this.channels, Object.values(this.tasks), this.checkpointerGetNextVersion, this.triggerToNodes);
            const valuesOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIterator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prefixGenerator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapOutputValues"])(this.outputKeys, writes, this.channels), "values"));
            this._emit(valuesOutput);
            this.checkpointPendingWrites = [];
            await this._putCheckpoint({
                source: "loop"
            });
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shouldInterrupt"])(this.checkpoint, this.interruptAfter, Object.values(this.tasks))) {
                this.status = "interrupt_after";
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphInterrupt"]();
            }
            if (this.config.configurable?.["__pregel_resuming"] !== void 0) delete this.config.configurable?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_RESUMING"]];
        } else return false;
        if (this.step > this.stop) {
            this.status = "out_of_steps";
            return false;
        }
        this.tasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_prepareNextTasks"])(this.checkpoint, this.checkpointPendingWrites, this.nodes, this.channels, this.config, true, {
            step: this.step,
            checkpointer: this.checkpointer,
            isResuming: this.isResuming,
            manager: this.manager,
            store: this.store,
            stream: this.stream,
            triggerToNodes: this.triggerToNodes,
            updatedChannels: this.updatedChannels
        });
        if (this.checkpointer) this._emit(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIterator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prefixGenerator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$debug$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapDebugCheckpoint"])(this.checkpointConfig, this.channels, this.streamKeys, this.checkpointMetadata, Object.values(this.tasks), this.checkpointPendingWrites, this.prevCheckpointConfig, this.outputKeys), "checkpoints")));
        if (Object.values(this.tasks).length === 0) {
            this.status = "done";
            return false;
        }
        if (this.skipDoneTasks && this.checkpointPendingWrites.length > 0) {
            for (const [tid, k, v] of this.checkpointPendingWrites){
                if (k === "__error__" || k === "__interrupt__" || k === "__resume__") continue;
                const task = Object.values(this.tasks).find((t)=>t.id === tid);
                if (task) task.writes.push([
                    k,
                    v
                ]);
            }
            for (const task of Object.values(this.tasks))if (task.writes.length > 0) this._outputWrites(task.id, task.writes, true);
        }
        if (Object.values(this.tasks).every((task)=>task.writes.length > 0)) return this.tick({
            inputKeys
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shouldInterrupt"])(this.checkpoint, this.interruptBefore, Object.values(this.tasks))) {
            this.status = "interrupt_before";
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphInterrupt"]();
        }
        const debugOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIterator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prefixGenerator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$debug$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapDebugTasks"])(Object.values(this.tasks)), "tasks"));
        this._emit(debugOutput);
        return true;
    }
    async finishAndHandleError(error) {
        if (this.durability === "exit" && (!this.isNested || typeof error !== "undefined" || this.checkpointNamespace.every((part)=>!part.includes(":")))) {
            this._putCheckpoint(this.checkpointMetadata);
            this._flushPendingWrites();
        }
        const suppress = this._suppressInterrupt(error);
        if (suppress || error === void 0) this.output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readChannels"])(this.channels, this.outputKeys);
        if (suppress) {
            if (this.tasks !== void 0 && this.checkpointPendingWrites.length > 0 && Object.values(this.tasks).some((task)=>task.writes.length > 0)) {
                this.updatedChannels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_applyWrites"])(this.checkpoint, this.channels, Object.values(this.tasks), this.checkpointerGetNextVersion, this.triggerToNodes);
                this._emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIteratorSync"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prefixGenerator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapOutputValues"])(this.outputKeys, Object.values(this.tasks).flatMap((t)=>t.writes), this.channels), "values")));
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphInterrupt"])(error) && !error.interrupts.length) this._emit([
                [
                    "updates",
                    {
                        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]]: []
                    }
                ],
                [
                    "values",
                    {
                        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]]: []
                    }
                ]
            ]);
        }
        return suppress;
    }
    async acceptPush(task, writeIdx, call) {
        if (this.interruptAfter?.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shouldInterrupt"])(this.checkpoint, this.interruptAfter, [
            task
        ])) {
            this.toInterrupt.push(task);
            return;
        }
        const pushed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_prepareSingleTask"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PUSH"],
            task.path ?? [],
            writeIdx,
            task.id,
            call
        ], this.checkpoint, this.checkpointPendingWrites, this.nodes, this.channels, task.config ?? {}, true, {
            step: this.step,
            checkpointer: this.checkpointer,
            manager: this.manager,
            store: this.store,
            stream: this.stream
        });
        if (!pushed) return;
        if (this.interruptBefore?.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shouldInterrupt"])(this.checkpoint, this.interruptBefore, [
            pushed
        ])) {
            this.toInterrupt.push(pushed);
            return;
        }
        this._emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIteratorSync"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prefixGenerator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$debug$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapDebugTasks"])([
            pushed
        ]), "tasks")));
        if (this.debug) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$debug$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printStepTasks"])(this.step, [
            pushed
        ]);
        this.tasks[pushed.id] = pushed;
        if (this.skipDoneTasks) this._matchWrites({
            [pushed.id]: pushed
        });
        const tasks = await this._matchCachedWrites();
        for (const { task } of tasks)this._outputWrites(task.id, task.writes, true);
        return pushed;
    }
    _suppressInterrupt(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphInterrupt"])(e) && !this.isNested;
    }
    async _first(inputKeys) {
        const { configurable } = this.config;
        const scratchpad = configurable?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SCRATCHPAD"]];
        if (scratchpad && scratchpad.nullResume !== void 0) this.putWrites(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NULL_TASK_ID"], [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESUME"],
                scratchpad.nullResume
            ]
        ]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])(this.input)) {
            const hasResume = this.input.resume != null;
            if (this.input.resume != null && typeof this.input.resume === "object" && Object.keys(this.input.resume).every(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$hash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isXXH3"])) {
                this.config.configurable ??= {};
                this.config.configurable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_RESUME_MAP"]] = this.input.resume;
            }
            if (hasResume && this.checkpointer == null) throw new Error("Cannot use Command(resume=...) without checkpointer");
            const writes = {};
            for (const [tid, key, value] of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapCommand"])(this.input, this.checkpointPendingWrites)){
                writes[tid] ??= [];
                writes[tid].push([
                    key,
                    value
                ]);
            }
            if (Object.keys(writes).length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyInputError"]("Received empty Command input");
            for (const [tid, ws] of Object.entries(writes))this.putWrites(tid, ws);
        }
        const nullWrites = (this.checkpointPendingWrites ?? []).filter((w)=>w[0] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NULL_TASK_ID"]).map((w)=>w.slice(1));
        if (nullWrites.length > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_applyWrites"])(this.checkpoint, this.channels, [
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INPUT"],
                writes: nullWrites,
                triggers: []
            }
        ], this.checkpointerGetNextVersion, this.triggerToNodes);
        const isCommandUpdateOrGoto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])(this.input) && nullWrites.length > 0;
        if (this.isResuming || isCommandUpdateOrGoto) {
            for(const channelName in this.channels){
                if (!Object.prototype.hasOwnProperty.call(this.channels, channelName)) continue;
                if (this.checkpoint.channel_versions[channelName] !== void 0) {
                    const version = this.checkpoint.channel_versions[channelName];
                    this.checkpoint.versions_seen[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]] = {
                        ...this.checkpoint.versions_seen[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]],
                        [channelName]: version
                    };
                }
            }
            const valuesOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIterator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prefixGenerator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapOutputValues"])(this.outputKeys, true, this.channels), "values"));
            this._emit(valuesOutput);
        }
        if (this.isResuming) this.input = INPUT_RESUMING;
        else if (isCommandUpdateOrGoto) {
            await this._putCheckpoint({
                source: "input"
            });
            this.input = INPUT_DONE;
        } else {
            const inputWrites = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIterator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapInput"])(inputKeys, this.input));
            if (inputWrites.length > 0) {
                const discardTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_prepareNextTasks"])(this.checkpoint, this.checkpointPendingWrites, this.nodes, this.channels, this.config, true, {
                    step: this.step
                });
                this.updatedChannels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_applyWrites"])(this.checkpoint, this.channels, Object.values(discardTasks).concat([
                    {
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INPUT"],
                        writes: inputWrites,
                        triggers: []
                    }
                ]), this.checkpointerGetNextVersion, this.triggerToNodes);
                await this._putCheckpoint({
                    source: "input"
                });
                this.input = INPUT_DONE;
            } else if (!("__pregel_resuming" in (this.config.configurable ?? {}))) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyInputError"](`Received no input writes for ${JSON.stringify(inputKeys, null, 2)}`);
            else this.input = INPUT_DONE;
        }
        if (!this.isNested) this.config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(this.config, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_RESUMING"]]: this.isResuming
        });
    }
    _emit(values) {
        for (const [mode, payload] of values){
            if (this.stream.modes.has(mode)) this.stream.push([
                this.checkpointNamespace,
                mode,
                payload
            ]);
            if ((mode === "checkpoints" || mode === "tasks") && this.stream.modes.has("debug")) {
                const step = mode === "checkpoints" ? this.step - 1 : this.step;
                const timestamp = /* @__PURE__ */ new Date().toISOString();
                const type = (()=>{
                    if (mode === "checkpoints") return "checkpoint";
                    else if (typeof payload === "object" && payload != null && "result" in payload) return "task_result";
                    else return "task";
                })();
                this.stream.push([
                    this.checkpointNamespace,
                    "debug",
                    {
                        step,
                        type,
                        timestamp,
                        payload
                    }
                ]);
            }
        }
    }
    _putCheckpoint(inputMetadata) {
        const exiting = this.checkpointMetadata === inputMetadata;
        const doCheckpoint = this.checkpointer != null && (this.durability !== "exit" || exiting);
        const storeCheckpoint = (checkpoint)=>{
            this.prevCheckpointConfig = this.checkpointConfig?.configurable?.checkpoint_id ? this.checkpointConfig : void 0;
            this.checkpointConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(this.checkpointConfig, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_NS"]]: this.config.configurable?.checkpoint_ns ?? ""
            });
            const channelVersions = {
                ...this.checkpoint.channel_versions
            };
            const newVersions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNewChannelVersions"])(this.checkpointPreviousVersions, channelVersions);
            this.checkpointPreviousVersions = channelVersions;
            this._checkpointerPutAfterPrevious({
                config: {
                    ...this.checkpointConfig
                },
                checkpoint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["copyCheckpoint"])(checkpoint),
                metadata: {
                    ...this.checkpointMetadata
                },
                newVersions
            });
            this.checkpointConfig = {
                ...this.checkpointConfig,
                configurable: {
                    ...this.checkpointConfig.configurable,
                    checkpoint_id: this.checkpoint.id
                }
            };
        };
        if (!exiting) this.checkpointMetadata = {
            ...inputMetadata,
            step: this.step,
            parents: this.config.configurable?.["checkpoint_map"] ?? {}
        };
        this.checkpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCheckpoint"])(this.checkpoint, doCheckpoint ? this.channels : void 0, this.step, exiting ? {
            id: this.checkpoint.id
        } : void 0);
        if (doCheckpoint) storeCheckpoint(this.checkpoint);
        if (!exiting) this.step += 1;
    }
    _flushPendingWrites() {
        if (this.checkpointer == null) return;
        if (this.checkpointPendingWrites.length === 0) return;
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(this.checkpointConfig, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_NS"]]: this.config.configurable?.checkpoint_ns ?? "",
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_ID"]]: this.checkpoint.id
        });
        const byTask = {};
        for (const [tid, key, value] of this.checkpointPendingWrites){
            byTask[tid] ??= [];
            byTask[tid].push([
                key,
                value
            ]);
        }
        for (const [tid, ws] of Object.entries(byTask))this._trackCheckpointerPromise(this.checkpointer.putWrites(config, ws, tid));
    }
    _matchWrites(tasks) {
        for (const [tid, k, v] of this.checkpointPendingWrites){
            if (k === "__error__" || k === "__interrupt__" || k === "__resume__") continue;
            const task = Object.values(tasks).find((t)=>t.id === tid);
            if (task) task.writes.push([
                k,
                v
            ]);
        }
        for (const task of Object.values(tasks))if (task.writes.length > 0) this._outputWrites(task.id, task.writes, true);
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/messages.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StreamMessagesHandler",
    ()=>StreamMessagesHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/callbacks/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/messages/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/messages/ai.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/messages/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$tool$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/messages/tool.js [app-route] (ecmascript)");
;
;
;
//#region src/pregel/messages.ts
function isChatGenerationChunk(x) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseMessage"])(x?.message);
}
function normalizeStreamMetadata(metadata, tags, name) {
    if (!metadata) return;
    const streamNamespace = metadata.langgraph_checkpoint_ns;
    const checkpointNs = metadata.checkpoint_ns;
    const namespace = streamNamespace ?? checkpointNs;
    if (!namespace) return;
    return [
        namespace.split("|"),
        {
            tags,
            name,
            ...metadata
        }
    ];
}
/**
* A callback handler that implements stream_mode=messages.
* Collects messages from (1) chat model stream events and (2) node outputs.
*/ var StreamMessagesHandler = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseCallbackHandler"] {
    name = "StreamMessagesHandler";
    streamFn;
    metadatas = {};
    seen = {};
    emittedChatModelRunIds = {};
    stableMessageIdMap = {};
    lc_prefer_streaming = true;
    constructor(streamFn){
        super();
        this.streamFn = streamFn;
    }
    _emit(meta, message, runId, dedupe = false) {
        if (dedupe && message.id !== void 0 && this.seen[message.id] !== void 0) return;
        let messageId = message.id;
        if (runId != null) if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$tool$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isToolMessage"])(message)) messageId ??= `run-${runId}-tool-${message.tool_call_id}`;
        else {
            if (messageId == null || messageId === `run-${runId}`) messageId = this.stableMessageIdMap[runId] ?? messageId ?? `run-${runId}`;
            this.stableMessageIdMap[runId] ??= messageId;
        }
        if (messageId !== message.id) {
            message.id = messageId;
            message.lc_kwargs.id = messageId;
        }
        if (message.id != null) this.seen[message.id] = message;
        this.streamFn([
            meta[0],
            "messages",
            [
                message,
                meta[1]
            ]
        ]);
    }
    handleChatModelStart(_llm, _messages, runId, _parentRunId, _extraParams, tags, metadata, name) {
        if (metadata && (!tags || !tags.includes("langsmith:nostream") && !tags.includes("nostream"))) this.metadatas[runId] = normalizeStreamMetadata(metadata, tags, name);
    }
    handleLLMNewToken(token, _idx, runId, _parentRunId, _tags, fields) {
        const chunk = fields?.chunk;
        this.emittedChatModelRunIds[runId] = true;
        if (this.metadatas[runId] !== void 0) if (isChatGenerationChunk(chunk)) this._emit(this.metadatas[runId], chunk.message, runId);
        else this._emit(this.metadatas[runId], new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AIMessageChunk"]({
            content: token
        }), runId);
    }
    handleLLMEnd(output, runId) {
        if (this.metadatas[runId] === void 0) return;
        if (!this.emittedChatModelRunIds[runId]) {
            const chatGeneration = output.generations?.[0]?.[0];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseMessage"])(chatGeneration?.message)) this._emit(this.metadatas[runId], chatGeneration?.message, runId, true);
            delete this.emittedChatModelRunIds[runId];
        }
        delete this.metadatas[runId];
        delete this.stableMessageIdMap[runId];
    }
    handleLLMError(_err, runId) {
        delete this.metadatas[runId];
    }
    handleChainStart(_chain, inputs, runId, _parentRunId, tags, metadata, _runType, name) {
        if (metadata !== void 0 && name === metadata.langgraph_node && (tags === void 0 || !tags.includes("langsmith:hidden"))) {
            this.metadatas[runId] = normalizeStreamMetadata(metadata, tags, name);
            if (typeof inputs === "object") {
                for (const value of Object.values(inputs))if (((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseMessage"])(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseMessageChunk"])(value)) && value.id !== void 0) this.seen[value.id] = value;
                else if (Array.isArray(value)) {
                    for (const item of value)if (((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseMessage"])(item) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseMessageChunk"])(item)) && item.id !== void 0) this.seen[item.id] = item;
                }
            }
        }
    }
    handleChainEnd(outputs, runId) {
        const metadata = this.metadatas[runId];
        delete this.metadatas[runId];
        if (metadata !== void 0) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseMessage"])(outputs)) this._emit(metadata, outputs, runId, true);
            else if (Array.isArray(outputs)) {
                for (const value of outputs)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseMessage"])(value)) this._emit(metadata, value, runId, true);
            } else if (outputs != null && typeof outputs === "object") {
                for (const value of Object.values(outputs))if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseMessage"])(value)) this._emit(metadata, value, runId, true);
                else if (Array.isArray(value)) {
                    for (const item of value)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseMessage"])(item)) this._emit(metadata, item, runId, true);
                }
            }
        }
    }
    handleChainError(_err, runId) {
        delete this.metadatas[runId];
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/retry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_runWithRetry",
    ()=>_runWithRetry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/index.js [app-route] (ecmascript)");
;
;
;
;
const DEFAULT_STATUS_NO_RETRY = [
    400,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    409
];
const DEFAULT_RETRY_ON_HANDLER = (error)=>{
    if (error.message.startsWith("Cancel") || error.message.startsWith("AbortError") || error.name === "AbortError") return false;
    if (error.name === "GraphValueError") return false;
    if (error?.code === "ECONNABORTED") return false;
    const status = error?.response?.status ?? error?.status;
    if (status && DEFAULT_STATUS_NO_RETRY.includes(+status)) return false;
    if (error?.error?.code === "insufficient_quota") return false;
    return true;
};
async function _runWithRetry(pregelTask, retryPolicy, configurable, signal) {
    const resolvedRetryPolicy = pregelTask.retry_policy ?? retryPolicy;
    let interval = resolvedRetryPolicy !== void 0 ? resolvedRetryPolicy.initialInterval ?? 500 : 0;
    let attempts = 0;
    let error;
    let result;
    let config = pregelTask.config ?? {};
    if (configurable) config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(config, configurable);
    config = {
        ...config,
        signal
    };
    const firstAttemptTime = Date.now();
    if (config.executionInfo != null) config.executionInfo = {
        ...config.executionInfo,
        nodeFirstAttemptTime: firstAttemptTime
    };
    while(true){
        if (signal?.aborted) break;
        pregelTask.writes.splice(0, pregelTask.writes.length);
        error = void 0;
        try {
            result = await pregelTask.proc.invoke(pregelTask.input, config);
            break;
        } catch (e) {
            error = e;
            error.pregelTaskId = pregelTask.id;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isParentCommand"])(error)) {
                const ns = config?.configurable?.checkpoint_ns;
                const cmd = error.command;
                if (cmd.graph === ns) {
                    for (const writer of pregelTask.writers)await writer.invoke(cmd, config);
                    error = void 0;
                    break;
                } else if (cmd.graph === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"].PARENT) {
                    const parentNs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getParentCheckpointNamespace"])(ns);
                    error.command = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"]({
                        ...error.command,
                        graph: parentNs
                    });
                }
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphBubbleUp"])(error)) break;
            if (resolvedRetryPolicy === void 0) break;
            attempts += 1;
            if (attempts >= (resolvedRetryPolicy.maxAttempts ?? 3)) break;
            if (!(resolvedRetryPolicy.retryOn ?? DEFAULT_RETRY_ON_HANDLER)(error)) break;
            interval = Math.min(resolvedRetryPolicy.maxInterval ?? 128e3, interval * (resolvedRetryPolicy.backoffFactor ?? 2));
            const intervalWithJitter = resolvedRetryPolicy.jitter ? Math.floor(interval + Math.random() * 1e3) : interval;
            await new Promise((resolve)=>setTimeout(resolve, intervalWithJitter));
            const errorName = error.name ?? error.constructor.unminifiable_name ?? error.constructor.name;
            if (resolvedRetryPolicy?.logWarning ?? true) console.log(`Retrying task "${String(pregelTask.name)}" after ${interval.toFixed(2)}ms (attempt ${attempts}) after ${errorName}: ${error}`);
            config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(config, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_RESUMING"]]: true
            });
            if (config.executionInfo != null) config.executionInfo = {
                ...config.executionInfo,
                nodeAttempt: attempts + 1,
                nodeFirstAttemptTime: firstAttemptTime
            };
        }
    }
    return {
        task: pregelTask,
        result,
        error,
        signalAborted: signal?.aborted
    };
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/runner.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PregelRunner",
    ()=>PregelRunner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$retry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/retry.js [app-route] (ecmascript)");
;
;
;
;
;
//#region src/pregel/runner.ts
const PROMISE_ADDED_SYMBOL = Symbol.for("promiseAdded");
function createPromiseBarrier() {
    const barrier = {
        next: ()=>void 0,
        wait: Promise.resolve(PROMISE_ADDED_SYMBOL)
    };
    function waitHandler(resolve) {
        barrier.next = ()=>{
            barrier.wait = new Promise(waitHandler);
            resolve(PROMISE_ADDED_SYMBOL);
        };
    }
    barrier.wait = new Promise(waitHandler);
    return barrier;
}
/**
* Responsible for handling task execution on each tick of the {@link PregelLoop}.
*/ var PregelRunner = class {
    nodeFinished;
    loop;
    /**
	* Construct a new PregelRunner, which executes tasks from the provided PregelLoop.
	* @param loop - The PregelLoop that produces tasks for this runner to execute.
	*/ constructor({ loop, nodeFinished }){
        this.loop = loop;
        this.nodeFinished = nodeFinished;
    }
    /**
	* Execute tasks from the current step of the PregelLoop.
	*
	* Note: this method does NOT call {@link PregelLoop}#tick. That must be handled externally.
	* @param options - Options for the execution.
	*/ async tick(options = {}) {
        const { timeout, retryPolicy, onStepWrite, maxConcurrency } = options;
        const nodeErrors = /* @__PURE__ */ new Set();
        let graphBubbleUp;
        const exceptionSignalController = new AbortController();
        const exceptionSignal = exceptionSignalController.signal;
        const stepTimeoutSignal = timeout ? AbortSignal.timeout(timeout) : void 0;
        const pendingTasks = Object.values(this.loop.tasks).filter((t)=>t.writes.length === 0);
        const { signals, disposeCombinedSignal } = this._initializeAbortSignals({
            exceptionSignal,
            stepTimeoutSignal,
            signal: options.signal
        });
        const taskStream = this._executeTasksWithRetry(pendingTasks, {
            signals,
            retryPolicy,
            maxConcurrency
        });
        for await (const { task, error, signalAborted } of taskStream){
            this._commit(task, error);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphInterrupt"])(error)) graphBubbleUp = error;
            else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphBubbleUp"])(error) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphInterrupt"])(graphBubbleUp)) graphBubbleUp = error;
            else if (error && (nodeErrors.size === 0 || !signalAborted)) {
                exceptionSignalController.abort();
                nodeErrors.add(error);
            }
        }
        disposeCombinedSignal?.();
        onStepWrite?.(this.loop.step, Object.values(this.loop.tasks).map((task)=>task.writes).flat());
        if (nodeErrors.size === 1) throw Array.from(nodeErrors)[0];
        else if (nodeErrors.size > 1) throw new AggregateError(Array.from(nodeErrors), `Multiple errors occurred during superstep ${this.loop.step}. See the "errors" field of this exception for more details.`);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphInterrupt"])(graphBubbleUp)) throw graphBubbleUp;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphBubbleUp"])(graphBubbleUp) && this.loop.isNested) throw graphBubbleUp;
    }
    /**
	* Initializes the current AbortSignals for the PregelRunner, handling the various ways that
	* AbortSignals must be chained together so that the PregelLoop can be interrupted if necessary
	* while still allowing nodes to gracefully exit.
	*
	* This method must only be called once per PregelRunner#tick. It has the side effect of updating
	* the PregelLoop#config with the new AbortSignals so they may be propagated correctly to future
	* ticks and subgraph calls.
	*
	* @param options - Options for the initialization.
	* @returns The current abort signals.
	* @internal
	*/ _initializeAbortSignals({ exceptionSignal, stepTimeoutSignal, signal }) {
        const previousSignals = this.loop.config.configurable?.["__pregel_abort_signals"] ?? {};
        const externalAbortSignal = previousSignals.externalAbortSignal ?? signal;
        const timeoutAbortSignal = stepTimeoutSignal ?? previousSignals.timeoutAbortSignal;
        const { signal: composedAbortSignal, dispose: disposeCombinedSignal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineAbortSignals"])(externalAbortSignal, timeoutAbortSignal, exceptionSignal);
        const signals = {
            externalAbortSignal,
            timeoutAbortSignal,
            composedAbortSignal
        };
        this.loop.config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(this.loop.config, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_ABORT_SIGNALS"]]: signals
        });
        return {
            signals,
            disposeCombinedSignal
        };
    }
    /**
	* Concurrently executes tasks with the requested retry policy, yielding a {@link SettledPregelTask} for each task as it completes.
	* @param tasks - The tasks to execute.
	* @param options - Options for the execution.
	*/ async *_executeTasksWithRetry(tasks, options) {
        const { retryPolicy, maxConcurrency, signals } = options ?? {};
        const barrier = createPromiseBarrier();
        const executingTasksMap = {};
        const thisCall = {
            executingTasksMap,
            barrier,
            retryPolicy,
            scheduleTask: async (task, writeIdx, call)=>this.loop.acceptPush(task, writeIdx, call)
        };
        if (signals?.composedAbortSignal?.aborted) throw new Error("Abort");
        let startedTasksCount = 0;
        let listener;
        const timeoutOrCancelSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineAbortSignals"])(signals?.externalAbortSignal, signals?.timeoutAbortSignal);
        const abortPromise = timeoutOrCancelSignal.signal ? new Promise((_resolve, reject)=>{
            listener = ()=>reject(/* @__PURE__ */ new Error("Abort"));
            timeoutOrCancelSignal.signal?.addEventListener("abort", listener, {
                once: true
            });
        }) : void 0;
        while((startedTasksCount === 0 || Object.keys(executingTasksMap).length > 0) && tasks.length){
            for(; Object.values(executingTasksMap).length < (maxConcurrency ?? tasks.length) && startedTasksCount < tasks.length; startedTasksCount += 1){
                const task = tasks[startedTasksCount];
                executingTasksMap[task.id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$retry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_runWithRetry"])(task, retryPolicy, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CALL"]]: call?.bind(thisCall, this, task)
                }, signals?.composedAbortSignal).catch((error)=>{
                    return {
                        task,
                        error,
                        signalAborted: signals?.composedAbortSignal?.aborted
                    };
                });
            }
            const settledTask = await Promise.race([
                ...Object.values(executingTasksMap),
                ...abortPromise ? [
                    abortPromise
                ] : [],
                barrier.wait
            ]);
            if (settledTask === PROMISE_ADDED_SYMBOL) continue;
            yield settledTask;
            if (listener != null) {
                timeoutOrCancelSignal.signal?.removeEventListener("abort", listener);
                timeoutOrCancelSignal.dispose?.();
            }
            delete executingTasksMap[settledTask.task.id];
        }
    }
    /**
	* Determines what writes to apply based on whether the task completed successfully, and what type of error occurred.
	*
	* Throws an error if the error is a {@link GraphBubbleUp} error and {@link PregelLoop}#isNested is true.
	*
	* @param task - The task to commit.
	* @param error - The error that occurred, if any.
	*/ _commit(task, error) {
        if (error !== void 0) if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphInterrupt"])(error)) {
            if (error.interrupts.length) {
                const interrupts = error.interrupts.map((interrupt)=>[
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"],
                        interrupt
                    ]);
                const resumes = task.writes.filter((w)=>w[0] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESUME"]);
                if (resumes.length) interrupts.push(...resumes);
                this.loop.putWrites(task.id, interrupts);
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphBubbleUp"])(error) && task.writes.length) this.loop.putWrites(task.id, task.writes);
        else this.loop.putWrites(task.id, [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR"],
                {
                    message: error.message,
                    name: error.name
                }
            ]
        ]);
        else {
            if (this.nodeFinished && (task.config?.tags == null || !task.config.tags.includes("langsmith:hidden"))) this.nodeFinished(String(task.name));
            if (task.writes.length === 0) task.writes.push([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NO_WRITES"],
                null
            ]);
            this.loop.putWrites(task.id, task.writes);
        }
    }
};
async function call(runner, task, func, name, input, options = {}) {
    const scratchpad = task.config?.configurable?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SCRATCHPAD"]];
    if (!scratchpad) throw new Error(`BUG: No scratchpad found on task ${task.name}__${task.id}`);
    const cnt = scratchpad.callCounter;
    scratchpad.callCounter += 1;
    const wcall = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Call"]({
        func,
        name,
        input,
        cache: options.cache,
        retry: options.retry,
        callbacks: options.callbacks
    });
    const nextTask = await this.scheduleTask(task, cnt, wcall);
    if (!nextTask) return void 0;
    const existingPromise = this.executingTasksMap[nextTask.id];
    if (existingPromise !== void 0) return existingPromise;
    if (nextTask.writes.length > 0) {
        const returns = nextTask.writes.filter(([c])=>c === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RETURN"]);
        const errors = nextTask.writes.filter(([c])=>c === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR"]);
        if (returns.length > 0) {
            if (returns.length === 1) return Promise.resolve(returns[0][1]);
            throw new Error(`BUG: multiple returns found for task ${nextTask.name}__${nextTask.id}`);
        }
        if (errors.length > 0) {
            if (errors.length === 1) {
                const errorValue = errors[0][1];
                const error = errorValue instanceof Error ? errorValue : new Error(String(errorValue));
                return Promise.reject(error);
            }
            throw new Error(`BUG: multiple errors found for task ${nextTask.name}__${nextTask.id}`);
        }
        return;
    } else {
        const prom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$retry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_runWithRetry"])(nextTask, options.retry, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CALL"]]: call.bind(this, runner, nextTask)
        });
        this.executingTasksMap[nextTask.id] = prom;
        this.barrier.next();
        return prom.then(({ result, error })=>{
            if (error) return Promise.reject(error);
            return result;
        });
    }
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/validate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateGraph",
    ()=>validateGraph,
    "validateKeys",
    ()=>validateKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$read$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/read.js [app-route] (ecmascript)");
;
;
//#region src/pregel/validate.ts
var GraphValidationError = class extends Error {
    constructor(message){
        super(message);
        this.name = "GraphValidationError";
    }
};
function validateGraph({ nodes, channels, inputChannels, outputChannels, streamChannels, interruptAfterNodes, interruptBeforeNodes }) {
    if (!channels) throw new GraphValidationError("Channels not provided");
    const subscribedChannels = /* @__PURE__ */ new Set();
    const allOutputChannels = /* @__PURE__ */ new Set();
    for (const [name, node] of Object.entries(nodes)){
        if (name === "__interrupt__") throw new GraphValidationError(`"Node name ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]} is reserved"`);
        if (node.constructor === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$read$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PregelNode"]) node.triggers.forEach((trigger)=>subscribedChannels.add(trigger));
        else throw new GraphValidationError(`Invalid node type ${typeof node}, expected PregelNode`);
    }
    for (const chan of subscribedChannels)if (!(chan in channels)) throw new GraphValidationError(`Subscribed channel '${String(chan)}' not in channels`);
    if (!Array.isArray(inputChannels)) {
        if (!subscribedChannels.has(inputChannels)) throw new GraphValidationError(`Input channel ${String(inputChannels)} is not subscribed to by any node`);
    } else if (inputChannels.every((channel)=>!subscribedChannels.has(channel))) throw new GraphValidationError(`None of the input channels ${inputChannels} are subscribed to by any node`);
    if (!Array.isArray(outputChannels)) allOutputChannels.add(outputChannels);
    else outputChannels.forEach((chan)=>allOutputChannels.add(chan));
    if (streamChannels && !Array.isArray(streamChannels)) allOutputChannels.add(streamChannels);
    else if (Array.isArray(streamChannels)) streamChannels.forEach((chan)=>allOutputChannels.add(chan));
    for (const chan of allOutputChannels)if (!(chan in channels)) throw new GraphValidationError(`Output channel '${String(chan)}' not in channels`);
    if (interruptAfterNodes && interruptAfterNodes !== "*") {
        for (const node of interruptAfterNodes)if (!(node in nodes)) throw new GraphValidationError(`Node ${String(node)} not in nodes`);
    }
    if (interruptBeforeNodes && interruptBeforeNodes !== "*") {
        for (const node of interruptBeforeNodes)if (!(node in nodes)) throw new GraphValidationError(`Node ${String(node)} not in nodes`);
    }
}
function validateKeys(keys, channels) {
    if (Array.isArray(keys)) {
        for (const key of keys)if (!(key in channels)) throw new Error(`Key ${String(key)} not found in channels`);
    } else if (!(keys in channels)) throw new Error(`Key ${String(keys)} not found in channels`);
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/topic.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Topic",
    ()=>Topic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
;
;
//#region src/channels/topic.ts
/**
* A configurable PubSub Topic.
*/ var Topic = class Topic extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseChannel"] {
    lc_graph_name = "Topic";
    unique = false;
    accumulate = false;
    seen;
    values;
    constructor(fields){
        super();
        this.unique = fields?.unique ?? this.unique;
        this.accumulate = fields?.accumulate ?? this.accumulate;
        this.seen = /* @__PURE__ */ new Set();
        this.values = [];
    }
    fromCheckpoint(checkpoint) {
        const empty = new Topic({
            unique: this.unique,
            accumulate: this.accumulate
        });
        if (typeof checkpoint !== "undefined") {
            empty.seen = new Set(checkpoint[0]);
            empty.values = checkpoint[1];
        }
        return empty;
    }
    update(values) {
        let updated = false;
        if (!this.accumulate) {
            updated = this.values.length > 0;
            this.values = [];
        }
        const flatValues = values.flat();
        if (flatValues.length > 0) if (this.unique) {
            for (const value of flatValues)if (!this.seen.has(value)) {
                updated = true;
                this.seen.add(value);
                this.values.push(value);
            }
        } else {
            updated = true;
            this.values.push(...flatValues);
        }
        return updated;
    }
    get() {
        if (this.values.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
        return this.values;
    }
    checkpoint() {
        return [
            [
                ...this.seen
            ],
            this.values
        ];
    }
    isAvailable() {
        return this.values.length !== 0;
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Channel",
    ()=>Channel,
    "Pregel",
    ()=>Pregel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/write.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$read$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/read.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/io.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/algo.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$subgraph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/subgraph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$debug$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/debug.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/stream.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$loop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/loop.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/messages.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$runner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/runner.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/validate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$topic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/topic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$interrupt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/interrupt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$serde$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/serde/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$id$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/id.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$manager$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/callbacks/manager.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//#region src/pregel/index.ts
/**
* Utility class for working with channels in the Pregel system.
* Provides static methods for subscribing to channels and writing to them.
*
* Channels are the communication pathways between nodes in a Pregel graph.
* They enable message passing and state updates between different parts of the graph.
*/ var Channel = class {
    static subscribeTo(channels, options) {
        const { key, tags } = {
            key: void 0,
            tags: void 0,
            ...options ?? {}
        };
        if (Array.isArray(channels) && key !== void 0) throw new Error("Can't specify a key when subscribing to multiple channels");
        let channelMappingOrArray;
        if (typeof channels === "string") if (key) channelMappingOrArray = {
            [key]: channels
        };
        else channelMappingOrArray = [
            channels
        ];
        else channelMappingOrArray = Object.fromEntries(channels.map((chan)=>[
                chan,
                chan
            ]));
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$read$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PregelNode"]({
            channels: channelMappingOrArray,
            triggers: Array.isArray(channels) ? channels : [
                channels
            ],
            tags
        });
    }
    /**
	* Creates a ChannelWrite that specifies how to write values to channels.
	* This is used to define how nodes send output to channels.
	*
	* @example
	* ```typescript
	* // Write to multiple channels
	* const write = Channel.writeTo(["output", "state"]);
	*
	* // Write with specific values
	* const write = Channel.writeTo(["output"], {
	*   state: "completed",
	*   result: calculateResult()
	* });
	*
	* // Write with a transformation function
	* const write = Channel.writeTo(["output"], {
	*   result: (x) => processResult(x)
	* });
	* ```
	*
	* @param channels - Array of channel names to write to
	* @param writes - Optional map of channel names to values or transformations
	* @returns A ChannelWrite object that can be used to write to the specified channels
	*/ static writeTo(channels, writes) {
        const channelWriteEntries = [];
        for (const channel of channels)channelWriteEntries.push({
            channel,
            value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PASSTHROUGH"],
            skipNone: false
        });
        for (const [key, value] of Object.entries(writes ?? {}))if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Runnable"].isRunnable(value) || typeof value === "function") channelWriteEntries.push({
            channel: key,
            value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PASSTHROUGH"],
            skipNone: true,
            mapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_coerceToRunnable"])(value)
        });
        else channelWriteEntries.push({
            channel: key,
            value,
            skipNone: false
        });
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"](channelWriteEntries);
    }
};
var PartialRunnable = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Runnable"] {
    lc_namespace = [
        "langgraph",
        "pregel"
    ];
    invoke(_input, _options) {
        throw new Error("Not implemented");
    }
    withConfig(_config) {
        return super.withConfig(_config);
    }
    stream(input, options) {
        return super.stream(input, options);
    }
};
/**
* The Pregel class is the core runtime engine of LangGraph, implementing a message-passing graph computation model
* inspired by [Google's Pregel system](https://research.google/pubs/pregel-a-system-for-large-scale-graph-processing/).
* It provides the foundation for building reliable, controllable agent workflows that can evolve state over time.
*
* Key features:
* - Message passing between nodes in discrete "supersteps"
* - Built-in persistence layer through checkpointers
* - First-class streaming support for values, updates, and events
* - Human-in-the-loop capabilities via interrupts
* - Support for parallel node execution within supersteps
*
* The Pregel class is not intended to be instantiated directly by consumers. Instead, use the following higher-level APIs:
* - {@link StateGraph}: The main graph class for building agent workflows
*   - Compiling a {@link StateGraph} will return a {@link CompiledGraph} instance, which extends `Pregel`
* - Functional API: A declarative approach using tasks and entrypoints
*   - A `Pregel` instance is returned by the {@link entrypoint} function
*
* @example
* ```typescript
* // Using StateGraph API
* const graph = new StateGraph(annotation)
*   .addNode("nodeA", myNodeFunction)
*   .addEdge("nodeA", "nodeB")
*   .compile();
*
* // The compiled graph is a Pregel instance
* const result = await graph.invoke(input);
* ```
*
* @example
* ```typescript
* // Using Functional API
* import { task, entrypoint } from "@langchain/langgraph";
* import { MemorySaver } from "@langchain/langgraph-checkpoint";
*
* // Define tasks that can be composed
* const addOne = task("add", async (x: number) => x + 1);
*
* // Create a workflow using the entrypoint function
* const workflow = entrypoint({
*   name: "workflow",
*   checkpointer: new MemorySaver()
* }, async (numbers: number[]) => {
*   // Tasks can be run in parallel
*   const results = await Promise.all(numbers.map(n => addOne(n)));
*   return results;
* });
*
* // The workflow is a Pregel instance
* const result = await workflow.invoke([1, 2, 3]); // Returns [2, 3, 4]
* ```
*
* @typeParam Nodes - Mapping of node names to their {@link PregelNode} implementations
* @typeParam Channels - Mapping of channel names to their {@link BaseChannel} or {@link ManagedValueSpec} implementations
* @typeParam ContextType - Type of context that can be passed to the graph
* @typeParam InputType - Type of input values accepted by the graph
* @typeParam OutputType - Type of output values produced by the graph
*/ var Pregel = class extends PartialRunnable {
    /**
	* Name of the class when serialized
	* @internal
	*/ static lc_name() {
        return "LangGraph";
    }
    /** @internal LangChain namespace for serialization necessary because Pregel extends Runnable */ lc_namespace = [
        "langgraph",
        "pregel"
    ];
    /** @internal Flag indicating this is a Pregel instance - necessary for serialization */ lg_is_pregel = true;
    /** The nodes in the graph, mapping node names to their PregelNode instances */ nodes;
    /** The channels in the graph, mapping channel names to their BaseChannel or ManagedValueSpec instances */ channels;
    /**
	* The input channels for the graph. These channels receive the initial input when the graph is invoked.
	* Can be a single channel key or an array of channel keys.
	*/ inputChannels;
    /**
	* The output channels for the graph. These channels contain the final output when the graph completes.
	* Can be a single channel key or an array of channel keys.
	*/ outputChannels;
    /** Whether to automatically validate the graph structure when it is compiled. Defaults to true. */ autoValidate = true;
    /**
	* The streaming modes enabled for this graph. Defaults to ["values"].
	* Supported modes:
	* - "values": Streams the full state after each step
	* - "updates": Streams state updates after each step
	* - "messages": Streams messages from within nodes
	* - "custom": Streams custom events from within nodes
	* - "tools": Streams tool-call lifecycle events (on_tool_start, on_tool_event, on_tool_end, on_tool_error) from LLM tool execution
	* - "debug": Streams events related to the execution of the graph - useful for tracing & debugging graph execution
	*/ streamMode = [
        "values"
    ];
    /**
	* Optional channels to stream. If not specified, all channels will be streamed.
	* Can be a single channel key or an array of channel keys.
	*/ streamChannels;
    /**
	* Optional array of node names or "all" to interrupt after executing these nodes.
	* Used for implementing human-in-the-loop workflows.
	*/ interruptAfter;
    /**
	* Optional array of node names or "all" to interrupt before executing these nodes.
	* Used for implementing human-in-the-loop workflows.
	*/ interruptBefore;
    /** Optional timeout in milliseconds for the execution of each superstep */ stepTimeout;
    /** Whether to enable debug logging. Defaults to false. */ debug = false;
    /**
	* Optional checkpointer for persisting graph state.
	* When provided, saves a checkpoint of the graph state at every superstep.
	* When false or undefined, checkpointing is disabled, and the graph will not be able to save or restore state.
	*/ checkpointer;
    /** Optional retry policy for handling failures in node execution */ retryPolicy;
    /** The default configuration for graph execution, can be overridden on a per-invocation basis */ config;
    /**
	* Optional long-term memory store for the graph, allows for persistence & retrieval of data across threads
	*/ store;
    /**
	* Optional cache for the graph, useful for caching tasks.
	*/ cache;
    /**
	* Optional interrupt helper function.
	* @internal
	*/ userInterrupt;
    /**
	* The trigger to node mapping for the graph run.
	* @internal
	*/ triggerToNodes = {};
    /**
	* Constructor for Pregel - meant for internal use only.
	*
	* @internal
	*/ constructor(fields){
        super(fields);
        let { streamMode } = fields;
        if (streamMode != null && !Array.isArray(streamMode)) streamMode = [
            streamMode
        ];
        this.nodes = fields.nodes;
        this.channels = fields.channels;
        if ("__pregel_tasks" in this.channels && "lc_graph_name" in this.channels["__pregel_tasks"] && this.channels["__pregel_tasks"].lc_graph_name !== "Topic") throw new Error(`Channel '${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TASKS"]}' is reserved and cannot be used in the graph.`);
        else this.channels[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TASKS"]] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$topic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Topic"]({
            accumulate: false
        });
        this.autoValidate = fields.autoValidate ?? this.autoValidate;
        this.streamMode = streamMode ?? this.streamMode;
        this.inputChannels = fields.inputChannels;
        this.outputChannels = fields.outputChannels;
        this.streamChannels = fields.streamChannels ?? this.streamChannels;
        this.interruptAfter = fields.interruptAfter;
        this.interruptBefore = fields.interruptBefore;
        this.stepTimeout = fields.stepTimeout ?? this.stepTimeout;
        this.debug = fields.debug ?? this.debug;
        this.checkpointer = fields.checkpointer;
        this.retryPolicy = fields.retryPolicy;
        this.config = fields.config;
        this.store = fields.store;
        this.cache = fields.cache;
        this.name = fields.name;
        this.triggerToNodes = fields.triggerToNodes ?? this.triggerToNodes;
        this.userInterrupt = fields.userInterrupt;
        if (this.autoValidate) this.validate();
    }
    /**
	* Creates a new instance of the Pregel graph with updated configuration.
	* This method follows the immutable pattern - instead of modifying the current instance,
	* it returns a new instance with the merged configuration.
	*
	* @example
	* ```typescript
	* // Create a new instance with debug enabled
	* const debugGraph = graph.withConfig({ debug: true });
	*
	* // Create a new instance with a specific thread ID
	* const threadGraph = graph.withConfig({
	*   configurable: { thread_id: "123" }
	* });
	* ```
	*
	* @param config - The configuration to merge with the current configuration
	* @returns A new Pregel instance with the merged configuration
	*/ withConfig(config) {
        const mergedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(this.config, config);
        return new this.constructor({
            ...this,
            config: mergedConfig
        });
    }
    /**
	* Validates the graph structure to ensure it is well-formed.
	* Checks for:
	* - No orphaned nodes
	* - Valid input/output channel configurations
	* - Valid interrupt configurations
	*
	* @returns this - The Pregel instance for method chaining
	* @throws {GraphValidationError} If the graph structure is invalid
	*/ validate() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateGraph"])({
            nodes: this.nodes,
            channels: this.channels,
            outputChannels: this.outputChannels,
            inputChannels: this.inputChannels,
            streamChannels: this.streamChannels,
            interruptAfterNodes: this.interruptAfter,
            interruptBeforeNodes: this.interruptBefore
        });
        for (const [name, node] of Object.entries(this.nodes))for (const trigger of node.triggers){
            this.triggerToNodes[trigger] ??= [];
            this.triggerToNodes[trigger].push(name);
        }
        return this;
    }
    /**
	* Gets a list of all channels that should be streamed.
	* If streamChannels is specified, returns those channels.
	* Otherwise, returns all channels in the graph.
	*
	* @returns Array of channel keys to stream
	*/ get streamChannelsList() {
        if (Array.isArray(this.streamChannels)) return this.streamChannels;
        else if (this.streamChannels) return [
            this.streamChannels
        ];
        else return Object.keys(this.channels);
    }
    /**
	* Gets the channels to stream in their original format.
	* If streamChannels is specified, returns it as-is (either single key or array).
	* Otherwise, returns all channels in the graph as an array.
	*
	* @returns Channel keys to stream, either as a single key or array
	*/ get streamChannelsAsIs() {
        if (this.streamChannels) return this.streamChannels;
        else return Object.keys(this.channels);
    }
    /**
	* Gets a drawable representation of the graph structure.
	* This is an async version of getGraph() and is the preferred method to use.
	*
	* @param config - Configuration for generating the graph visualization
	* @returns A representation of the graph that can be visualized
	*/ async getGraphAsync(config) {
        return this.getGraph(config);
    }
    /**
	* Gets all subgraphs within this graph.
	* A subgraph is a Pregel instance that is nested within a node of this graph.
	*
	* @deprecated Use getSubgraphsAsync instead. The async method will become the default in the next minor release.
	* @param namespace - Optional namespace to filter subgraphs
	* @param recurse - Whether to recursively get subgraphs of subgraphs
	* @returns Generator yielding tuples of [name, subgraph]
	*/ *getSubgraphs(namespace, recurse) {
        for (const [name, node] of Object.entries(this.nodes)){
            if (namespace !== void 0) {
                if (!namespace.startsWith(name)) continue;
            }
            const candidates = node.subgraphs?.length ? node.subgraphs : [
                node.bound
            ];
            for (const candidate of candidates){
                const graph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$subgraph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findSubgraphPregel"])(candidate);
                if (graph !== void 0) {
                    if (name === namespace) {
                        yield [
                            name,
                            graph
                        ];
                        return;
                    }
                    if (namespace === void 0) yield [
                        name,
                        graph
                    ];
                    if (recurse) {
                        let newNamespace = namespace;
                        if (namespace !== void 0) newNamespace = namespace.slice(name.length + 1);
                        for (const [subgraphName, subgraph] of graph.getSubgraphs(newNamespace, recurse))yield [
                            `${name}|${subgraphName}`,
                            subgraph
                        ];
                    }
                }
            }
        }
    }
    /**
	* Gets all subgraphs within this graph asynchronously.
	* A subgraph is a Pregel instance that is nested within a node of this graph.
	*
	* @param namespace - Optional namespace to filter subgraphs
	* @param recurse - Whether to recursively get subgraphs of subgraphs
	* @returns AsyncGenerator yielding tuples of [name, subgraph]
	*/ async *getSubgraphsAsync(namespace, recurse) {
        yield* this.getSubgraphs(namespace, recurse);
    }
    /**
	* Prepares a state snapshot from saved checkpoint data.
	* This is an internal method used by getState and getStateHistory.
	*
	* @param config - Configuration for preparing the snapshot
	* @param saved - Optional saved checkpoint data
	* @param subgraphCheckpointer - Optional checkpointer for subgraphs
	* @param applyPendingWrites - Whether to apply pending writes to tasks and then to channels
	* @returns A snapshot of the graph state
	* @internal
	*/ async _prepareStateSnapshot({ config, saved, subgraphCheckpointer, applyPendingWrites = false }) {
        if (saved === void 0) return {
            values: {},
            next: [],
            config,
            tasks: []
        };
        const channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyChannels"])(this.channels, saved.checkpoint);
        if (saved.pendingWrites?.length) {
            const nullWrites = saved.pendingWrites.filter(([taskId, _])=>taskId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NULL_TASK_ID"]).map(([_, channel, value])=>[
                    String(channel),
                    value
                ]);
            if (nullWrites.length > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_applyWrites"])(saved.checkpoint, channels, [
                {
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INPUT"],
                    writes: nullWrites,
                    triggers: []
                }
            ], void 0, this.triggerToNodes);
        }
        const nextTasks = Object.values((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_prepareNextTasks"])(saved.checkpoint, saved.pendingWrites, this.nodes, channels, saved.config, true, {
            step: (saved.metadata?.step ?? -1) + 1,
            store: this.store
        }));
        const subgraphs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIterator"])(this.getSubgraphsAsync());
        const parentNamespace = saved.config.configurable?.checkpoint_ns ?? "";
        const taskStates = {};
        for (const task of nextTasks){
            const matchingSubgraph = subgraphs.find(([name])=>name === task.name);
            if (!matchingSubgraph) continue;
            let taskNs = `${String(task.name)}:${task.id}`;
            if (parentNamespace) taskNs = `${parentNamespace}|${taskNs}`;
            if (subgraphCheckpointer === void 0) {
                const config = {
                    configurable: {
                        thread_id: saved.config.configurable?.thread_id,
                        checkpoint_ns: taskNs
                    }
                };
                taskStates[task.id] = config;
            } else {
                const subgraphConfig = {
                    configurable: {
                        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINTER"]]: subgraphCheckpointer,
                        thread_id: saved.config.configurable?.thread_id,
                        checkpoint_ns: taskNs
                    }
                };
                const pregel = matchingSubgraph[1];
                taskStates[task.id] = await pregel.getState(subgraphConfig, {
                    subgraphs: true
                });
            }
        }
        if (applyPendingWrites && saved.pendingWrites?.length) {
            const nextTaskById = Object.fromEntries(nextTasks.map((task)=>[
                    task.id,
                    task
                ]));
            for (const [taskId, channel, value] of saved.pendingWrites){
                if ([
                    "__error__",
                    "__interrupt__",
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$serde$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SCHEDULED"]
                ].includes(channel)) continue;
                if (!(taskId in nextTaskById)) continue;
                nextTaskById[taskId].writes.push([
                    String(channel),
                    value
                ]);
            }
            const tasksWithWrites = nextTasks.filter((task)=>task.writes.length > 0);
            if (tasksWithWrites.length > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_applyWrites"])(saved.checkpoint, channels, tasksWithWrites, void 0, this.triggerToNodes);
        }
        let metadata = saved?.metadata;
        if (metadata && saved?.config?.configurable?.thread_id) metadata = {
            ...metadata,
            thread_id: saved.config.configurable.thread_id
        };
        const nextList = nextTasks.filter((task)=>task.writes.length === 0).map((task)=>task.name);
        return {
            values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readChannels"])(channels, this.streamChannelsAsIs),
            next: nextList,
            tasks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$debug$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tasksWithWrites"])(nextTasks, saved?.pendingWrites ?? [], taskStates, this.streamChannelsAsIs),
            metadata,
            config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchCheckpointMap"])(saved.config, saved.metadata),
            createdAt: saved.checkpoint.ts,
            parentConfig: saved.parentConfig
        };
    }
    /**
	* Gets the current state of the graph.
	* Requires a checkpointer to be configured.
	*
	* @param config - Configuration for retrieving the state
	* @param options - Additional options
	* @returns A snapshot of the current graph state
	* @throws {GraphValueError} If no checkpointer is configured
	*/ async getState(config, options) {
        const checkpointer = config.configurable?.["__pregel_checkpointer"] ?? this.checkpointer;
        if (!checkpointer) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphValueError"]("No checkpointer set", {
            lc_error_code: "MISSING_CHECKPOINTER"
        });
        const checkpointNamespace = config.configurable?.checkpoint_ns ?? "";
        if (checkpointNamespace !== "" && config.configurable?.["__pregel_checkpointer"] === void 0) {
            const recastNamespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recastCheckpointNamespace"])(checkpointNamespace);
            for await (const [name, subgraph] of this.getSubgraphsAsync(recastNamespace, true))if (name === recastNamespace) return await subgraph.getState((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(config, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINTER"]]: checkpointer
            }), {
                subgraphs: options?.subgraphs
            });
        }
        const mergedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(this.config, config);
        const saved = await checkpointer.getTuple(config);
        return await this._prepareStateSnapshot({
            config: mergedConfig,
            saved,
            subgraphCheckpointer: options?.subgraphs ? checkpointer : void 0,
            applyPendingWrites: !config.configurable?.checkpoint_id
        });
    }
    /**
	* Gets the history of graph states.
	* Requires a checkpointer to be configured.
	* Useful for:
	* - Debugging execution history
	* - Implementing time travel
	* - Analyzing graph behavior
	*
	* @param config - Configuration for retrieving the history
	* @param options - Options for filtering the history
	* @returns An async iterator of state snapshots
	* @throws {Error} If no checkpointer is configured
	*/ async *getStateHistory(config, options) {
        const checkpointer = config.configurable?.["__pregel_checkpointer"] ?? this.checkpointer;
        if (!checkpointer) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphValueError"]("No checkpointer set", {
            lc_error_code: "MISSING_CHECKPOINTER"
        });
        const checkpointNamespace = config.configurable?.checkpoint_ns ?? "";
        if (checkpointNamespace !== "" && config.configurable?.["__pregel_checkpointer"] === void 0) {
            const recastNamespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recastCheckpointNamespace"])(checkpointNamespace);
            for await (const [name, pregel] of this.getSubgraphsAsync(recastNamespace, true))if (name === recastNamespace) {
                yield* pregel.getStateHistory((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(config, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINTER"]]: checkpointer
                }), options);
                return;
            }
        }
        const mergedConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(this.config, config, {
            configurable: {
                checkpoint_ns: checkpointNamespace
            }
        });
        for await (const checkpointTuple of checkpointer.list(mergedConfig, options))yield this._prepareStateSnapshot({
            config: checkpointTuple.config,
            saved: checkpointTuple
        });
    }
    /**
	* Apply updates to the graph state in bulk.
	* Requires a checkpointer to be configured.
	*
	* This method is useful for recreating a thread
	* from a list of updates, especially if a checkpoint
	* is created as a result of multiple tasks.
	*
	* @internal The API might change in the future.
	*
	* @param startConfig - Configuration for the update
	* @param updates - The list of updates to apply to graph state
	* @returns Updated configuration
	* @throws {GraphValueError} If no checkpointer is configured
	* @throws {InvalidUpdateError} If the update cannot be attributed to a node or an update can be only applied in sequence.
	*/ async bulkUpdateState(startConfig, supersteps) {
        const checkpointer = startConfig.configurable?.["__pregel_checkpointer"] ?? this.checkpointer;
        if (!checkpointer) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphValueError"]("No checkpointer set", {
            lc_error_code: "MISSING_CHECKPOINTER"
        });
        if (supersteps.length === 0) throw new Error("No supersteps provided");
        if (supersteps.some((s)=>s.updates.length === 0)) throw new Error("No updates provided");
        const checkpointNamespace = startConfig.configurable?.checkpoint_ns ?? "";
        if (checkpointNamespace !== "" && startConfig.configurable?.["__pregel_checkpointer"] === void 0) {
            const recastNamespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recastCheckpointNamespace"])(checkpointNamespace);
            for await (const [, pregel] of this.getSubgraphsAsync(recastNamespace, true))return await pregel.bulkUpdateState((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(startConfig, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINTER"]]: checkpointer
            }), supersteps);
            throw new Error(`Subgraph "${recastNamespace}" not found`);
        }
        const updateSuperStep = async (inputConfig, updates)=>{
            const config = this.config ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeConfigs"])(this.config, inputConfig) : inputConfig;
            const saved = await checkpointer.getTuple(config);
            const checkpoint = saved !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["copyCheckpoint"])(saved.checkpoint) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheckpoint"])();
            const checkpointPreviousVersions = {
                ...saved?.checkpoint.channel_versions
            };
            const step = saved?.metadata?.step ?? -1;
            let checkpointConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(config, {
                checkpoint_ns: config.configurable?.checkpoint_ns ?? ""
            });
            let checkpointMetadata = config.metadata ?? {};
            if (saved?.config.configurable) {
                checkpointConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(config, saved.config.configurable);
                checkpointMetadata = {
                    ...saved.metadata,
                    ...checkpointMetadata
                };
            }
            const { values, asNode } = updates[0];
            if (values == null && asNode === void 0) {
                if (updates.length > 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Cannot create empty checkpoint with multiple updates`);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchCheckpointMap"])(await checkpointer.put(checkpointConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCheckpoint"])(checkpoint, void 0, step), {
                    source: "update",
                    step: step + 1,
                    parents: saved?.metadata?.parents ?? {}
                }, {}), saved ? saved.metadata : void 0);
            }
            const channels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyChannels"])(this.channels, checkpoint);
            if (values === null && asNode === "__end__") {
                if (updates.length > 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Cannot apply multiple updates when clearing state`);
                if (saved) {
                    const nextTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_prepareNextTasks"])(checkpoint, saved.pendingWrites || [], this.nodes, channels, saved.config, true, {
                        step: (saved.metadata?.step ?? -1) + 1,
                        checkpointer,
                        store: this.store
                    });
                    const nullWrites = (saved.pendingWrites || []).filter((w)=>w[0] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NULL_TASK_ID"]).map((w)=>w.slice(1));
                    if (nullWrites.length > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_applyWrites"])(checkpoint, channels, [
                        {
                            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INPUT"],
                            writes: nullWrites,
                            triggers: []
                        }
                    ], checkpointer.getNextVersion.bind(checkpointer), this.triggerToNodes);
                    for (const [taskId, k, v] of saved.pendingWrites || []){
                        if ([
                            "__error__",
                            "__interrupt__",
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$serde$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SCHEDULED"]
                        ].includes(k)) continue;
                        if (!(taskId in nextTasks)) continue;
                        nextTasks[taskId].writes.push([
                            k,
                            v
                        ]);
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_applyWrites"])(checkpoint, channels, Object.values(nextTasks), checkpointer.getNextVersion.bind(checkpointer), this.triggerToNodes);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchCheckpointMap"])(await checkpointer.put(checkpointConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCheckpoint"])(checkpoint, channels, step), {
                    ...checkpointMetadata,
                    source: "update",
                    step: step + 1,
                    parents: saved?.metadata?.parents ?? {}
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNewChannelVersions"])(checkpointPreviousVersions, checkpoint.channel_versions)), saved ? saved.metadata : void 0);
            }
            if (asNode === "__copy__") {
                if (updates.length > 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Cannot copy checkpoint with multiple updates`);
                if (saved == null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Cannot copy a non-existent checkpoint`);
                const isCopyWithUpdates = (values)=>{
                    if (!Array.isArray(values)) return false;
                    if (values.length === 0) return false;
                    return values.every((v)=>Array.isArray(v) && v.length === 2);
                };
                const nextCheckpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCheckpoint"])(checkpoint, void 0, step);
                const nextConfig = await checkpointer.put(saved.parentConfig ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfigurable"])(saved.config, {
                    checkpoint_id: void 0
                }), nextCheckpoint, {
                    source: "fork",
                    step: step + 1,
                    parents: saved.metadata?.parents ?? {}
                }, {});
                if (isCopyWithUpdates(values)) {
                    const nextTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_prepareNextTasks"])(nextCheckpoint, saved.pendingWrites, this.nodes, channels, nextConfig, false, {
                        step: step + 2
                    });
                    const tasksGroupBy = Object.values(nextTasks).reduce((acc, { name, id })=>{
                        acc[name] ??= [];
                        acc[name].push({
                            id
                        });
                        return acc;
                    }, {});
                    const userGroupBy = values.reduce((acc, item)=>{
                        const [values, asNode] = item;
                        acc[asNode] ??= [];
                        const targetIdx = acc[asNode].length;
                        const taskId = tasksGroupBy[asNode]?.[targetIdx]?.id;
                        acc[asNode].push({
                            values,
                            asNode,
                            taskId
                        });
                        return acc;
                    }, {});
                    return updateSuperStep((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchCheckpointMap"])(nextConfig, saved.metadata), Object.values(userGroupBy).flat());
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchCheckpointMap"])(nextConfig, saved.metadata);
            }
            if (asNode === "__input__") {
                if (updates.length > 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Cannot apply multiple updates when updating as input`);
                const inputWrites = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIterator"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$io$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapInput"])(this.inputChannels, values));
                if (inputWrites.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Received no input writes for ${JSON.stringify(this.inputChannels, null, 2)}`);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_applyWrites"])(checkpoint, channels, [
                    {
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INPUT"],
                        writes: inputWrites,
                        triggers: []
                    }
                ], checkpointer.getNextVersion.bind(this.checkpointer), this.triggerToNodes);
                const nextStep = saved?.metadata?.step != null ? saved.metadata.step + 1 : -1;
                const nextConfig = await checkpointer.put(checkpointConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCheckpoint"])(checkpoint, channels, nextStep), {
                    source: "input",
                    step: nextStep,
                    parents: saved?.metadata?.parents ?? {}
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNewChannelVersions"])(checkpointPreviousVersions, checkpoint.channel_versions));
                await checkpointer.putWrites(nextConfig, inputWrites, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$id$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid5"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INPUT"], checkpoint.id));
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchCheckpointMap"])(nextConfig, saved ? saved.metadata : void 0);
            }
            if (config.configurable?.checkpoint_id === void 0 && saved?.pendingWrites !== void 0 && saved.pendingWrites.length > 0) {
                const nextTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_prepareNextTasks"])(checkpoint, saved.pendingWrites, this.nodes, channels, saved.config, true, {
                    store: this.store,
                    checkpointer: this.checkpointer,
                    step: (saved.metadata?.step ?? -1) + 1
                });
                const nullWrites = (saved.pendingWrites ?? []).filter((w)=>w[0] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NULL_TASK_ID"]).map((w)=>w.slice(1));
                if (nullWrites.length > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_applyWrites"])(saved.checkpoint, channels, [
                    {
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INPUT"],
                        writes: nullWrites,
                        triggers: []
                    }
                ], void 0, this.triggerToNodes);
                for (const [tid, k, v] of saved.pendingWrites){
                    if ([
                        "__error__",
                        "__interrupt__",
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$serde$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SCHEDULED"]
                    ].includes(k) || nextTasks[tid] === void 0) continue;
                    nextTasks[tid].writes.push([
                        k,
                        v
                    ]);
                }
                const tasks = Object.values(nextTasks).filter((task)=>{
                    return task.writes.length > 0;
                });
                if (tasks.length > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_applyWrites"])(checkpoint, channels, tasks, void 0, this.triggerToNodes);
            }
            const nonNullVersion = Object.values(checkpoint.versions_seen).map((seenVersions)=>{
                return Object.values(seenVersions);
            }).flat().find((v)=>!!v);
            const validUpdates = [];
            if (updates.length === 1) {
                let { values, asNode, taskId } = updates[0];
                if (asNode === void 0 && Object.keys(this.nodes).length === 1) [asNode] = Object.keys(this.nodes);
                else if (asNode === void 0 && nonNullVersion === void 0) {
                    if (typeof this.inputChannels === "string" && this.nodes[this.inputChannels] !== void 0) asNode = this.inputChannels;
                } else if (asNode === void 0) {
                    const lastSeenByNode = Object.entries(checkpoint.versions_seen).map(([n, seen])=>{
                        return Object.values(seen).map((v)=>{
                            return [
                                v,
                                n
                            ];
                        });
                    }).flat().filter(([_, v])=>v !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]).sort(([aNumber], [bNumber])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compareChannelVersions"])(aNumber, bNumber));
                    if (lastSeenByNode) {
                        if (lastSeenByNode.length === 1) asNode = lastSeenByNode[0][1];
                        else if (lastSeenByNode[lastSeenByNode.length - 1][0] !== lastSeenByNode[lastSeenByNode.length - 2][0]) asNode = lastSeenByNode[lastSeenByNode.length - 1][1];
                    }
                }
                if (asNode === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Ambiguous update, specify "asNode"`);
                validUpdates.push({
                    values,
                    asNode,
                    taskId
                });
            } else for (const { asNode, values, taskId } of updates){
                if (asNode == null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`"asNode" is required when applying multiple updates`);
                validUpdates.push({
                    values,
                    asNode,
                    taskId
                });
            }
            const tasks = [];
            for (const { asNode, values, taskId } of validUpdates){
                if (this.nodes[asNode] === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Node "${asNode.toString()}" does not exist`);
                const writers = this.nodes[asNode].getWriters();
                if (!writers.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`No writers found for node "${asNode.toString()}"`);
                tasks.push({
                    name: asNode,
                    input: values,
                    proc: writers.length > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableSequence"].from(writers, {
                        omitSequenceTags: true
                    }) : writers[0],
                    writes: [],
                    triggers: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]
                    ],
                    id: taskId ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$id$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uuid5"])("__interrupt__", checkpoint.id),
                    writers: []
                });
            }
            for (const task of tasks)await task.proc.invoke(task.input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchConfig"])({
                ...config,
                store: config?.store ?? this.store
            }, {
                runName: config.runName ?? `${this.getName()}UpdateState`,
                configurable: {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_SEND"]]: (items)=>task.writes.push(...items),
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_READ"]]: (select_, fresh_ = false)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_localRead"])(checkpoint, channels, task, select_, fresh_)
                }
            }));
            for (const task of tasks){
                const channelWrites = task.writes.filter((w)=>w[0] !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PUSH"]);
                if (saved !== void 0 && channelWrites.length > 0) await checkpointer.putWrites(checkpointConfig, channelWrites, task.id);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$algo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_applyWrites"])(checkpoint, channels, tasks, checkpointer.getNextVersion.bind(this.checkpointer), this.triggerToNodes);
            const newVersions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNewChannelVersions"])(checkpointPreviousVersions, checkpoint.channel_versions);
            const nextConfig = await checkpointer.put(checkpointConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCheckpoint"])(checkpoint, channels, step + 1), {
                source: "update",
                step: step + 1,
                parents: saved?.metadata?.parents ?? {}
            }, newVersions);
            for (const task of tasks){
                const pushWrites = task.writes.filter((w)=>w[0] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PUSH"]);
                if (pushWrites.length > 0) await checkpointer.putWrites(nextConfig, pushWrites, task.id);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["patchCheckpointMap"])(nextConfig, saved ? saved.metadata : void 0);
        };
        let currentConfig = startConfig;
        for (const { updates } of supersteps)currentConfig = await updateSuperStep(currentConfig, updates);
        return currentConfig;
    }
    /**
	* Updates the state of the graph with new values.
	* Requires a checkpointer to be configured.
	*
	* This method can be used for:
	* - Implementing human-in-the-loop workflows
	* - Modifying graph state during breakpoints
	* - Integrating external inputs into the graph
	*
	* @param inputConfig - Configuration for the update
	* @param values - The values to update the state with
	* @param asNode - Optional node name to attribute the update to
	* @returns Updated configuration
	* @throws {GraphValueError} If no checkpointer is configured
	* @throws {InvalidUpdateError} If the update cannot be attributed to a node
	*/ async updateState(inputConfig, values, asNode) {
        return this.bulkUpdateState(inputConfig, [
            {
                updates: [
                    {
                        values,
                        asNode
                    }
                ]
            }
        ]);
    }
    /**
	* Gets the default values for various graph configuration options.
	* This is an internal method used to process and normalize configuration options.
	*
	* @param config - The input configuration options
	* @returns A tuple containing normalized values for:
	* - debug mode
	* - stream modes
	* - input keys
	* - output keys
	* - remaining config
	* - interrupt before nodes
	* - interrupt after nodes
	* - checkpointer
	* - store
	* - whether stream mode is single
	* - node cache
	* - whether checkpoint during is enabled
	* @internal
	*/ _defaults(config) {
        const { debug, streamMode, inputKeys, outputKeys, interruptAfter, interruptBefore, ...rest } = config;
        let streamModeSingle = true;
        const defaultDebug = debug !== void 0 ? debug : this.debug;
        let defaultOutputKeys = outputKeys;
        if (defaultOutputKeys === void 0) defaultOutputKeys = this.streamChannelsAsIs;
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateKeys"])(defaultOutputKeys, this.channels);
        let defaultInputKeys = inputKeys;
        if (defaultInputKeys === void 0) defaultInputKeys = this.inputChannels;
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateKeys"])(defaultInputKeys, this.channels);
        const defaultInterruptBefore = interruptBefore ?? this.interruptBefore ?? [];
        const defaultInterruptAfter = interruptAfter ?? this.interruptAfter ?? [];
        let defaultStreamMode;
        if (streamMode !== void 0) {
            defaultStreamMode = Array.isArray(streamMode) ? streamMode : [
                streamMode
            ];
            streamModeSingle = typeof streamMode === "string";
        } else {
            if (config.configurable?.["__pregel_task_id"] !== void 0) defaultStreamMode = [
                "values"
            ];
            else defaultStreamMode = this.streamMode;
            streamModeSingle = true;
        }
        let defaultCheckpointer;
        if (this.checkpointer === false) defaultCheckpointer = void 0;
        else if (config !== void 0 && config.configurable?.["__pregel_checkpointer"] !== void 0) defaultCheckpointer = config.configurable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINTER"]];
        else if (this.checkpointer === true) throw new Error("checkpointer: true cannot be used for root graphs.");
        else defaultCheckpointer = this.checkpointer;
        const defaultStore = config.store ?? this.store;
        const defaultCache = config.cache ?? this.cache;
        if (config.durability != null && config.checkpointDuring != null) throw new Error("Cannot use both `durability` and `checkpointDuring` at the same time.");
        const checkpointDuringDurability = (()=>{
            if (config.checkpointDuring == null) return void 0;
            if (config.checkpointDuring === false) return "exit";
            return "async";
        })();
        const defaultDurability = config.durability ?? checkpointDuringDurability ?? config?.configurable?.["__pregel_durability"] ?? "async";
        return [
            defaultDebug,
            defaultStreamMode,
            defaultInputKeys,
            defaultOutputKeys,
            rest,
            defaultInterruptBefore,
            defaultInterruptAfter,
            defaultCheckpointer,
            defaultStore,
            streamModeSingle,
            defaultCache,
            defaultDurability
        ];
    }
    /**
	* Streams the execution of the graph, emitting state updates as they occur.
	* This is the primary method for observing graph execution in real-time.
	*
	* Stream modes:
	* - "values": Emits complete state after each step
	* - "updates": Emits only state changes after each step
	* - "debug": Emits detailed debug information
	* - "messages": Emits messages from within nodes
	* - "custom": Emits custom events from within nodes
	* - "checkpoints": Emits checkpoints from within nodes
	* - "tasks": Emits tasks from within nodes
	*
	* @param input - The input to start graph execution with
	* @param options - Configuration options for streaming
	* @returns An async iterable stream of graph state updates
	*/ async stream(input, options) {
        const abortController = new AbortController();
        const config = {
            recursionLimit: this.config?.recursionLimit,
            ...options,
            signal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineAbortSignals"])(options?.signal, abortController.signal).signal
        };
        const stream = await super.stream(input, config);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStreamWithAbortSignal"](options?.encoding === "text/event-stream" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toEventStream"])(stream) : stream, abortController);
    }
    streamEvents(input, options, streamOptions) {
        const abortController = new AbortController();
        const config = {
            recursionLimit: this.config?.recursionLimit,
            ...options,
            callbacks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineCallbacks"])(this.config?.callbacks, options?.callbacks),
            signal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineAbortSignals"])(options?.signal, abortController.signal).signal
        };
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableStreamWithAbortSignal"](super.streamEvents(input, config, streamOptions), abortController);
    }
    /**
	* Validates the input for the graph.
	* @param input - The input to validate
	* @returns The validated input
	* @internal
	*/ async _validateInput(input) {
        return input;
    }
    /**
	* Validates the context options for the graph.
	* @param context - The context options to validate
	* @returns The validated context options
	* @internal
	*/ async _validateContext(context) {
        return context;
    }
    /**
	* Internal iterator used by stream() to generate state updates.
	* This method handles the core logic of graph execution and streaming.
	*
	* @param input - The input to start graph execution with
	* @param options - Configuration options for streaming
	* @returns AsyncGenerator yielding state updates
	* @internal
	*/ async *_streamIterator(input, options) {
        const streamEncoding = "version" in (options ?? {}) ? void 0 : options?.encoding ?? void 0;
        const streamSubgraphs = options?.subgraphs;
        const inputConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureLangGraphConfig"])(this.config, options);
        if (inputConfig.recursionLimit === void 0 || inputConfig.recursionLimit < 1) throw new Error(`Passed "recursionLimit" must be at least 1.`);
        if (this.checkpointer !== void 0 && this.checkpointer !== false && inputConfig.configurable === void 0) throw new Error(`Checkpointer requires one or more of the following "configurable" keys: "thread_id", "checkpoint_ns", "checkpoint_id"`);
        const validInput = await this._validateInput(input);
        const { runId, ...restConfig } = inputConfig;
        const [debug, streamMode, , outputKeys, config, interruptBefore, interruptAfter, checkpointer, store, streamModeSingle, cache, durability] = this._defaults(restConfig);
        config.metadata = {
            ls_integration: "langgraph",
            ...config.metadata
        };
        if (typeof config.context !== "undefined") config.context = await this._validateContext(config.context);
        else config.configurable = await this._validateContext(config.configurable);
        const stream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IterableReadableWritableStream"]({
            modes: new Set(streamMode)
        });
        if (this.checkpointer === true) {
            config.configurable ??= {};
            const ns = config.configurable["checkpoint_ns"] ?? "";
            config.configurable[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_NS"]] = ns.split("|").map((part)=>part.split(":")[0]).join("|");
        }
        if (streamMode.includes("messages")) {
            const messageStreamer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StreamMessagesHandler"]((chunk)=>stream.push(chunk));
            const { callbacks } = config;
            if (callbacks === void 0) config.callbacks = [
                messageStreamer
            ];
            else if (Array.isArray(callbacks)) config.callbacks = callbacks.concat(messageStreamer);
            else {
                const copiedCallbacks = callbacks.copy();
                copiedCallbacks.addHandler(messageStreamer, true);
                config.callbacks = copiedCallbacks;
            }
        }
        if (streamMode.includes("tools")) {
            const toolStreamer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StreamToolsHandler"]((chunk)=>stream.push(chunk));
            const { callbacks } = config;
            if (callbacks === void 0) config.callbacks = [
                toolStreamer
            ];
            else if (Array.isArray(callbacks)) config.callbacks = callbacks.concat(toolStreamer);
            else {
                const copiedCallbacks = callbacks.copy();
                copiedCallbacks.addHandler(toolStreamer, true);
                config.callbacks = copiedCallbacks;
            }
        }
        config.writer ??= (chunk)=>{
            if (!streamMode.includes("custom")) return;
            const ns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getConfig"])()?.configurable?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_CHECKPOINT_NS"]]?.split("|").slice(0, -1);
            stream.push([
                ns ?? [],
                "custom",
                chunk
            ]);
        };
        config.interrupt ??= this.userInterrupt ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$interrupt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interrupt"];
        if (config.serverInfo == null) config.serverInfo = _buildServerInfo(config);
        const runManager = await (await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$callbacks$2f$manager$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CallbackManager"]._configureSync(config?.callbacks, void 0, config?.tags, void 0, config?.metadata, void 0, {
            tracerInheritableMetadata: _getTracingMetadataDefaults(config)
        }))?.handleChainStart(this.toJSON(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_coerceToDict"])(input, "input"), runId, void 0, void 0, void 0, config?.runName ?? this.getName());
        const channelSpecs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOnlyChannels"])(this.channels);
        let loop;
        let loopError;
        /**
		* The PregelLoop will yield events from concurrent tasks as soon as they are
		* generated. Each task can push multiple events onto the stream in any order.
		*
		* We use a separate background method and stream here in order to yield events
		* from the loop to the main stream and therefore back to the user as soon as
		* they are available.
		*/ const createAndRunLoop = async ()=>{
            try {
                loop = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$loop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PregelLoop"].initialize({
                    input: validInput,
                    config,
                    checkpointer,
                    nodes: this.nodes,
                    channelSpecs,
                    outputKeys,
                    streamKeys: this.streamChannelsAsIs,
                    store,
                    cache,
                    stream,
                    interruptAfter,
                    interruptBefore,
                    manager: runManager,
                    debug: this.debug,
                    triggerToNodes: this.triggerToNodes,
                    durability
                });
                const runner = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$runner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PregelRunner"]({
                    loop,
                    nodeFinished: config.configurable?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_NODE_FINISHED"]]
                });
                if (options?.subgraphs) loop.config.configurable = {
                    ...loop.config.configurable,
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_STREAM"]]: loop.stream
                };
                await this._runLoop({
                    loop,
                    runner,
                    debug,
                    config
                });
                if (durability === "sync") await Promise.all(loop?.checkpointerPromises ?? []);
            } catch (e) {
                loopError = e;
            } finally{
                try {
                    if (loop) {
                        await loop.store?.stop();
                        await loop.cache?.stop();
                    }
                    await Promise.all(loop?.checkpointerPromises ?? []);
                } catch (e) {
                    loopError = loopError ?? e;
                }
                if (loopError) stream.error(loopError);
                else stream.close();
            }
        };
        const runLoopPromise = createAndRunLoop();
        try {
            for await (const chunk of stream){
                if (chunk === void 0) throw new Error("Data structure error.");
                const [namespace, mode, payload] = chunk;
                if (streamMode.includes(mode)) {
                    if (streamEncoding === "text/event-stream") {
                        if (streamSubgraphs) yield [
                            namespace,
                            mode,
                            payload
                        ];
                        else yield [
                            null,
                            mode,
                            payload
                        ];
                        continue;
                    }
                    if (streamSubgraphs && !streamModeSingle) yield [
                        namespace,
                        mode,
                        payload
                    ];
                    else if (!streamModeSingle) yield [
                        mode,
                        payload
                    ];
                    else if (streamSubgraphs) yield [
                        namespace,
                        payload
                    ];
                    else yield payload;
                }
            }
        } catch (e) {
            await runManager?.handleChainError(loopError);
            throw e;
        } finally{
            await runLoopPromise;
        }
        await runManager?.handleChainEnd(loop?.output ?? {}, runId, void 0, void 0, void 0);
    }
    /**
	* Run the graph with a single input and config.
	* @param input The input to the graph.
	* @param options The configuration to use for the run.
	*/ async invoke(input, options) {
        const streamMode = options?.streamMode ?? "values";
        const config = {
            ...options,
            outputKeys: options?.outputKeys ?? this.outputChannels,
            streamMode,
            encoding: void 0
        };
        const chunks = [];
        const stream = await this.stream(input, config);
        const interruptChunks = [];
        let latest;
        for await (const chunk of stream)if (streamMode === "values") if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInterrupted"])(chunk)) interruptChunks.push(chunk[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]]);
        else latest = chunk;
        else chunks.push(chunk);
        if (streamMode === "values") {
            if (interruptChunks.length > 0) {
                const interrupts = interruptChunks.flat(1);
                if (latest == null) return {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]]: interrupts
                };
                if (typeof latest === "object") return {
                    ...latest,
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INTERRUPT"]]: interrupts
                };
            }
            return latest;
        }
        return chunks;
    }
    async _runLoop(params) {
        const { loop, runner, debug, config } = params;
        let tickError;
        try {
            while(await loop.tick({
                inputKeys: this.inputChannels
            })){
                for (const { task } of (await loop._matchCachedWrites()))loop._outputWrites(task.id, task.writes, true);
                if (debug) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$debug$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printStepCheckpoint"])(loop.checkpointMetadata.step, loop.channels, this.streamChannelsList);
                if (debug) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$debug$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printStepTasks"])(loop.step, Object.values(loop.tasks));
                await runner.tick({
                    timeout: this.stepTimeout,
                    retryPolicy: this.retryPolicy,
                    onStepWrite: (step, writes)=>{
                        if (debug) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$debug$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printStepWrites"])(step, writes, this.streamChannelsList);
                    },
                    maxConcurrency: config.maxConcurrency,
                    signal: config.signal
                });
            }
            if (loop.status === "out_of_steps") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphRecursionError"]([
                `Recursion limit of ${config.recursionLimit} reached`,
                "without hitting a stop condition. You can increase the",
                `limit by setting the "recursionLimit" config key.`
            ].join(" "), {
                lc_error_code: "GRAPH_RECURSION_LIMIT"
            });
        } catch (e) {
            tickError = e;
            if (!await loop.finishAndHandleError(tickError)) throw e;
        } finally{
            if (tickError === void 0) await loop.finishAndHandleError();
        }
    }
    async clearCache() {
        await this.cache?.clear([]);
    }
};
function _buildServerInfo(config) {
    const metadata = config.metadata ?? {};
    const configurable = config.configurable ?? {};
    const assistantId = metadata.assistant_id;
    const graphId = metadata.graph_id;
    const authUserData = configurable.langgraph_auth_user;
    let user;
    if (authUserData != null && typeof authUserData === "object" && "identity" in authUserData) user = authUserData;
    if (assistantId != null || graphId != null || user != null) return {
        assistantId: assistantId != null ? String(assistantId) : "",
        graphId: graphId != null ? String(graphId) : "",
        user
    };
}
const OMITTED_KEYS = new Set([
    "key",
    "token",
    "secret",
    "password",
    "auth"
]);
function _excludeAsMetadata(key, value) {
    const keyLower = key.toLowerCase();
    let hasOmittedSubstring = false;
    for (const substr of OMITTED_KEYS)if (keyLower.includes(substr)) {
        hasOmittedSubstring = true;
        break;
    }
    return key.startsWith("__") || !(typeof value === "string" || typeof value === "number" || typeof value === "boolean") || hasOmittedSubstring;
}
function _getTracingMetadataDefaults(config) {
    const configurable = config.configurable;
    if (!configurable) return;
    const metadata = {};
    for (const [key, value] of Object.entries(configurable)){
        if (_excludeAsMetadata(key, value)) continue;
        metadata[key] = value;
    }
    return Object.keys(metadata).length > 0 ? metadata : void 0;
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/ephemeral_value.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EphemeralValue",
    ()=>EphemeralValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
;
;
//#region src/channels/ephemeral_value.ts
/**
* Stores the value received in the step immediately preceding, clears after.
*/ var EphemeralValue = class EphemeralValue extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseChannel"] {
    lc_graph_name = "EphemeralValue";
    guard;
    value = [];
    constructor(guard = true){
        super();
        this.guard = guard;
    }
    fromCheckpoint(checkpoint) {
        const empty = new EphemeralValue(this.guard);
        if (typeof checkpoint !== "undefined") empty.value = [
            checkpoint
        ];
        return empty;
    }
    update(values) {
        if (values.length === 0) {
            const updated = this.value.length > 0;
            this.value = [];
            return updated;
        }
        if (values.length !== 1 && this.guard) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"]("EphemeralValue can only receive one value per step.");
        this.value = [
            values[values.length - 1]
        ];
        return true;
    }
    get() {
        if (this.value.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
        return this.value[0];
    }
    checkpoint() {
        if (this.value.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
        return this.value[0];
    }
    isAvailable() {
        return this.value.length !== 0;
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/graph.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Branch",
    ()=>Branch,
    "CompiledGraph",
    ()=>CompiledGraph,
    "Graph",
    ()=>Graph$1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/write.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$read$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/read.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$subgraph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/subgraph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$ephemeral_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/ephemeral_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/graph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript) <export default as validate>");
;
;
;
;
;
;
;
;
;
;
;
;
//#region src/graph/graph.ts
var Branch = class {
    path;
    ends;
    constructor(options){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Runnable"].isRunnable(options.path)) this.path = options.path;
        else this.path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_coerceToRunnable"])(options.path);
        this.ends = Array.isArray(options.pathMap) ? options.pathMap.reduce((acc, n)=>{
            acc[n] = n;
            return acc;
        }, {}) : options.pathMap;
    }
    run(writer, reader) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"].registerWriter(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableCallable"]({
            name: "<branch_run>",
            trace: false,
            func: async (input, config)=>{
                try {
                    return await this._route(input, config, writer, reader);
                } catch (e) {
                    if (e.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NodeInterrupt"].unminifiable_name) console.warn("[WARN]: 'NodeInterrupt' thrown in conditional edge. This is likely a bug in your graph implementation.\nNodeInterrupt should only be thrown inside a node, not in edge conditions.");
                    throw e;
                }
            }
        }));
    }
    async _route(input, config, writer, reader) {
        let result = await this.path.invoke(reader ? reader(config) : input, config);
        if (!Array.isArray(result)) result = [
            result
        ];
        let destinations;
        if (this.ends) destinations = result.map((r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSend"])(r) ? r : this.ends[r]);
        else destinations = result;
        if (destinations.some((dest)=>!dest)) throw new Error("Branch condition returned unknown or null destination");
        if (destinations.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSend"]).some((packet)=>packet.node === "__end__")) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"]("Cannot send a packet to the END node");
        return await writer(destinations, config) ?? input;
    }
};
var Graph$1 = class {
    nodes;
    edges;
    branches;
    entryPoint;
    compiled = false;
    constructor(){
        this.nodes = {};
        this.edges = /* @__PURE__ */ new Set();
        this.branches = {};
    }
    warnIfCompiled(message) {
        if (this.compiled) console.warn(message);
    }
    get allEdges() {
        return this.edges;
    }
    addNode(...args) {
        function isMutlipleNodes(args) {
            return args.length >= 1 && typeof args[0] !== "string";
        }
        const nodes = isMutlipleNodes(args) ? Array.isArray(args[0]) ? args[0] : Object.entries(args[0]) : [
            [
                args[0],
                args[1],
                args[2]
            ]
        ];
        if (nodes.length === 0) throw new Error("No nodes provided in `addNode`");
        for (const [key, action, options] of nodes){
            for (const reservedChar of [
                "|",
                ":"
            ])if (key.includes(reservedChar)) throw new Error(`"${reservedChar}" is a reserved character and is not allowed in node names.`);
            this.warnIfCompiled(`Adding a node to a graph that has already been compiled. This will not be reflected in the compiled graph.`);
            if (key in this.nodes) throw new Error(`Node \`${key}\` already present.`);
            if (key === "__end__") throw new Error(`Node \`${key}\` is reserved.`);
            const runnable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_coerceToRunnable"])(action);
            this.nodes[key] = {
                runnable,
                metadata: options?.metadata,
                subgraphs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$subgraph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPregelLike"])(runnable) ? [
                    runnable
                ] : options?.subgraphs,
                ends: options?.ends
            };
        }
        return this;
    }
    addEdge(startKey, endKey) {
        this.warnIfCompiled(`Adding an edge to a graph that has already been compiled. This will not be reflected in the compiled graph.`);
        if (startKey === "__end__") throw new Error("END cannot be a start node");
        if (endKey === "__start__") throw new Error("START cannot be an end node");
        if (Array.from(this.edges).some(([start])=>start === startKey) && !("channels" in this)) throw new Error(`Already found path for ${startKey}. For multiple edges, use StateGraph.`);
        this.edges.add([
            startKey,
            endKey
        ]);
        return this;
    }
    addConditionalEdges(source, path, pathMap) {
        const options = typeof source === "object" ? source : {
            source,
            path,
            pathMap
        };
        this.warnIfCompiled("Adding an edge to a graph that has already been compiled. This will not be reflected in the compiled graph.");
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Runnable"].isRunnable(options.path)) options.path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_coerceToRunnable"])(options.path);
        const name = options.path.getName() === "RunnableLambda" ? "condition" : options.path.getName();
        if (this.branches[options.source] && this.branches[options.source][name]) throw new Error(`Condition \`${name}\` already present for node \`${source}\``);
        this.branches[options.source] ??= {};
        this.branches[options.source][name] = new Branch(options);
        return this;
    }
    /**
	* @deprecated use `addEdge(START, key)` instead
	*/ setEntryPoint(key) {
        this.warnIfCompiled("Setting the entry point of a graph that has already been compiled. This will not be reflected in the compiled graph.");
        return this.addEdge(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"], key);
    }
    /**
	* @deprecated use `addEdge(key, END)` instead
	*/ setFinishPoint(key) {
        this.warnIfCompiled("Setting a finish point of a graph that has already been compiled. This will not be reflected in the compiled graph.");
        return this.addEdge(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]);
    }
    compile({ checkpointer, interruptBefore, interruptAfter, name } = {}) {
        this.validate([
            ...Array.isArray(interruptBefore) ? interruptBefore : [],
            ...Array.isArray(interruptAfter) ? interruptAfter : []
        ]);
        const compiled = new CompiledGraph({
            builder: this,
            checkpointer,
            interruptAfter,
            interruptBefore,
            autoValidate: false,
            nodes: {},
            channels: {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"]]: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$ephemeral_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EphemeralValue"](),
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]]: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$ephemeral_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EphemeralValue"]()
            },
            inputChannels: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"],
            outputChannels: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"],
            streamChannels: [],
            streamMode: "values",
            name
        });
        for (const [key, node] of Object.entries(this.nodes))compiled.attachNode(key, node);
        for (const [start, end] of this.edges)compiled.attachEdge(start, end);
        for (const [start, branches] of Object.entries(this.branches))for (const [name, branch] of Object.entries(branches))compiled.attachBranch(start, name, branch);
        return compiled.validate();
    }
    validate(interrupt) {
        const allSources = new Set([
            ...this.allEdges
        ].map(([src, _])=>src));
        for (const [start] of Object.entries(this.branches))allSources.add(start);
        for (const source of allSources)if (source !== "__start__" && !(source in this.nodes)) throw new Error(`Found edge starting at unknown node \`${source}\``);
        const allTargets = new Set([
            ...this.allEdges
        ].map(([_, target])=>target));
        for (const [start, branches] of Object.entries(this.branches))for (const branch of Object.values(branches))if (branch.ends != null) for (const end of Object.values(branch.ends))allTargets.add(end);
        else {
            allTargets.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]);
            for (const node of Object.keys(this.nodes))if (node !== start) allTargets.add(node);
        }
        for (const node of Object.values(this.nodes))for (const target of node.ends ?? [])allTargets.add(target);
        for (const node of Object.keys(this.nodes))if (!allTargets.has(node)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnreachableNodeError"]([
            `Node \`${node}\` is not reachable.`,
            "",
            "If you are returning Command objects from your node,",
            "make sure you are passing names of potential destination nodes as an \"ends\" array",
            "into \".addNode(..., { ends: [\"node1\", \"node2\"] })\"."
        ].join("\n"), {
            lc_error_code: "UNREACHABLE_NODE"
        });
        for (const target of allTargets)if (target !== "__end__" && !(target in this.nodes)) throw new Error(`Found edge ending at unknown node \`${target}\``);
        if (interrupt) {
            for (const node of interrupt)if (!(node in this.nodes)) throw new Error(`Interrupt node \`${node}\` is not present`);
        }
        this.compiled = true;
    }
};
var CompiledGraph = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Pregel"] {
    builder;
    constructor({ builder, ...rest }){
        super(rest);
        this.builder = builder;
    }
    attachNode(key, node) {
        this.channels[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$ephemeral_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EphemeralValue"]();
        this.nodes[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$read$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PregelNode"]({
            channels: [],
            triggers: [],
            metadata: node.metadata,
            subgraphs: node.subgraphs,
            ends: node.ends
        }).pipe(node.runnable).pipe(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"]([
            {
                channel: key,
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PASSTHROUGH"]
            }
        ], [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
        ]));
        this.streamChannels.push(key);
    }
    attachEdge(start, end) {
        if (end === "__end__") {
            if (start === "__start__") throw new Error("Cannot have an edge from START to END");
            this.nodes[start].writers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"]([
                {
                    channel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"],
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PASSTHROUGH"]
                }
            ], [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
            ]));
        } else {
            this.nodes[end].triggers.push(start);
            this.nodes[end].channels.push(start);
        }
    }
    attachBranch(start, name, branch) {
        if (start === "__start__" && !this.nodes["__start__"]) this.nodes[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"]] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Channel"].subscribeTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"], {
            tags: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
            ]
        });
        this.nodes[start].pipe(branch.run((dests)=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"](dests.map((dest)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSend"])(dest)) return dest;
                return {
                    channel: dest === "__end__" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"] : `branch:${start}:${name}:${dest}`,
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PASSTHROUGH"]
                };
            }), [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
            ]);
        }));
        const ends = branch.ends ? Object.values(branch.ends) : Object.keys(this.nodes);
        for (const end of ends)if (end !== "__end__") {
            const channelName = `branch:${start}:${name}:${end}`;
            this.channels[channelName] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$ephemeral_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EphemeralValue"]();
            this.nodes[end].triggers.push(channelName);
            this.nodes[end].channels.push(channelName);
        }
    }
    /**
	* Returns a drawable representation of the computation graph.
	*/ async getGraphAsync(config) {
        const xray = config?.xray;
        const graph = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Graph"]();
        const startNodes = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"]]: graph.addNode({
                schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
            }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"])
        };
        const endNodes = {};
        let subgraphs = {};
        if (xray) subgraphs = Object.fromEntries((await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIterator"])(this.getSubgraphsAsync())).filter((x)=>isCompiledGraph(x[1])));
        function addEdge(start, end, label, conditional = false) {
            if (end === "__end__" && endNodes["__end__"] === void 0) endNodes[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]] = graph.addNode({
                schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
            }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]);
            if (startNodes[start] === void 0) return;
            if (endNodes[end] === void 0) throw new Error(`End node ${end} not found!`);
            return graph.addEdge(startNodes[start], endNodes[end], label !== end ? label : void 0, conditional);
        }
        for (const [key, nodeSpec] of Object.entries(this.builder.nodes)){
            const displayKey = _escapeMermaidKeywords(key);
            const node = nodeSpec.runnable;
            const metadata = nodeSpec.metadata ?? {};
            if (this.interruptBefore?.includes(key) && this.interruptAfter?.includes(key)) metadata.__interrupt = "before,after";
            else if (this.interruptBefore?.includes(key)) metadata.__interrupt = "before";
            else if (this.interruptAfter?.includes(key)) metadata.__interrupt = "after";
            if (xray) {
                const newXrayValue = typeof xray === "number" ? xray - 1 : xray;
                const drawableSubgraph = subgraphs[key] !== void 0 ? await subgraphs[key].getGraphAsync({
                    ...config,
                    xray: newXrayValue
                }) : node.getGraph(config);
                drawableSubgraph.trimFirstNode();
                drawableSubgraph.trimLastNode();
                if (Object.keys(drawableSubgraph.nodes).length > 1) {
                    const [e, s] = graph.extend(drawableSubgraph, displayKey);
                    if (e === void 0) throw new Error(`Could not extend subgraph "${key}" due to missing entrypoint.`);
                    function _isRunnableInterface(thing) {
                        return thing ? thing.lc_runnable : false;
                    }
                    function _nodeDataStr(id, data) {
                        if (id !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])(id)) return id;
                        else if (_isRunnableInterface(data)) try {
                            let dataStr = data.getName();
                            dataStr = dataStr.startsWith("Runnable") ? dataStr.slice(8) : dataStr;
                            return dataStr;
                        } catch  {
                            return data.getName();
                        }
                        else return data.name ?? "UnknownSchema";
                    }
                    if (s !== void 0) startNodes[displayKey] = {
                        name: _nodeDataStr(s.id, s.data),
                        ...s
                    };
                    endNodes[displayKey] = {
                        name: _nodeDataStr(e.id, e.data),
                        ...e
                    };
                } else {
                    const newNode = graph.addNode(node, displayKey, metadata);
                    startNodes[displayKey] = newNode;
                    endNodes[displayKey] = newNode;
                }
            } else {
                const newNode = graph.addNode(node, displayKey, metadata);
                startNodes[displayKey] = newNode;
                endNodes[displayKey] = newNode;
            }
        }
        const sortedEdges = [
            ...this.builder.allEdges
        ].sort(([a], [b])=>{
            if (a < b) return -1;
            else if (b > a) return 1;
            else return 0;
        });
        for (const [start, end] of sortedEdges)addEdge(_escapeMermaidKeywords(start), _escapeMermaidKeywords(end));
        for (const [start, branches] of Object.entries(this.builder.branches)){
            const defaultEnds = {
                ...Object.fromEntries(Object.keys(this.builder.nodes).filter((k)=>k !== start).map((k)=>[
                        _escapeMermaidKeywords(k),
                        _escapeMermaidKeywords(k)
                    ])),
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]
            };
            for (const branch of Object.values(branches)){
                let ends;
                if (branch.ends !== void 0) ends = branch.ends;
                else ends = defaultEnds;
                for (const [label, end] of Object.entries(ends))addEdge(_escapeMermaidKeywords(start), _escapeMermaidKeywords(end), label, true);
            }
        }
        for (const [key, node] of Object.entries(this.builder.nodes))if (node.ends !== void 0) for (const end of node.ends)addEdge(_escapeMermaidKeywords(key), _escapeMermaidKeywords(end), void 0, true);
        return graph;
    }
    /**
	* Returns a drawable representation of the computation graph.
	*
	* @deprecated Use getGraphAsync instead. The async method will be the default in the next minor core release.
	*/ getGraph(config) {
        const xray = config?.xray;
        const graph = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Graph"]();
        const startNodes = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"]]: graph.addNode({
                schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
            }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"])
        };
        const endNodes = {};
        let subgraphs = {};
        if (xray) subgraphs = Object.fromEntries((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gatherIteratorSync"])(this.getSubgraphs()).filter((x)=>isCompiledGraph(x[1])));
        function addEdge(start, end, label, conditional = false) {
            if (end === "__end__" && endNodes["__end__"] === void 0) endNodes[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]] = graph.addNode({
                schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
            }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]);
            return graph.addEdge(startNodes[start], endNodes[end], label !== end ? label : void 0, conditional);
        }
        for (const [key, nodeSpec] of Object.entries(this.builder.nodes)){
            const displayKey = _escapeMermaidKeywords(key);
            const node = nodeSpec.runnable;
            const metadata = nodeSpec.metadata ?? {};
            if (this.interruptBefore?.includes(key) && this.interruptAfter?.includes(key)) metadata.__interrupt = "before,after";
            else if (this.interruptBefore?.includes(key)) metadata.__interrupt = "before";
            else if (this.interruptAfter?.includes(key)) metadata.__interrupt = "after";
            if (xray) {
                const newXrayValue = typeof xray === "number" ? xray - 1 : xray;
                const drawableSubgraph = subgraphs[key] !== void 0 ? subgraphs[key].getGraph({
                    ...config,
                    xray: newXrayValue
                }) : node.getGraph(config);
                drawableSubgraph.trimFirstNode();
                drawableSubgraph.trimLastNode();
                if (Object.keys(drawableSubgraph.nodes).length > 1) {
                    const [e, s] = graph.extend(drawableSubgraph, displayKey);
                    if (e === void 0) throw new Error(`Could not extend subgraph "${key}" due to missing entrypoint.`);
                    function _isRunnableInterface(thing) {
                        return thing ? thing.lc_runnable : false;
                    }
                    function _nodeDataStr(id, data) {
                        if (id !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])(id)) return id;
                        else if (_isRunnableInterface(data)) try {
                            let dataStr = data.getName();
                            dataStr = dataStr.startsWith("Runnable") ? dataStr.slice(8) : dataStr;
                            return dataStr;
                        } catch  {
                            return data.getName();
                        }
                        else return data.name ?? "UnknownSchema";
                    }
                    if (s !== void 0) startNodes[displayKey] = {
                        name: _nodeDataStr(s.id, s.data),
                        ...s
                    };
                    endNodes[displayKey] = {
                        name: _nodeDataStr(e.id, e.data),
                        ...e
                    };
                } else {
                    const newNode = graph.addNode(node, displayKey, metadata);
                    startNodes[displayKey] = newNode;
                    endNodes[displayKey] = newNode;
                }
            } else {
                const newNode = graph.addNode(node, displayKey, metadata);
                startNodes[displayKey] = newNode;
                endNodes[displayKey] = newNode;
            }
        }
        const sortedEdges = [
            ...this.builder.allEdges
        ].sort(([a], [b])=>{
            if (a < b) return -1;
            else if (b > a) return 1;
            else return 0;
        });
        for (const [start, end] of sortedEdges)addEdge(_escapeMermaidKeywords(start), _escapeMermaidKeywords(end));
        for (const [start, branches] of Object.entries(this.builder.branches)){
            const defaultEnds = {
                ...Object.fromEntries(Object.keys(this.builder.nodes).filter((k)=>k !== start).map((k)=>[
                        _escapeMermaidKeywords(k),
                        _escapeMermaidKeywords(k)
                    ])),
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]
            };
            for (const branch of Object.values(branches)){
                let ends;
                if (branch.ends !== void 0) ends = branch.ends;
                else ends = defaultEnds;
                for (const [label, end] of Object.entries(ends))addEdge(_escapeMermaidKeywords(start), _escapeMermaidKeywords(end), label, true);
            }
        }
        return graph;
    }
};
function isCompiledGraph(x) {
    return typeof x.attachNode === "function" && typeof x.attachEdge === "function";
}
function _escapeMermaidKeywords(key) {
    if (key === "subgraph") return `"${key}"`;
    return key;
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/types.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSerializableSchema",
    ()=>isSerializableSchema,
    "isStandardJSONSchema",
    ()=>isStandardJSONSchema,
    "isStandardSchema",
    ()=>isStandardSchema
]);
//#region src/state/types.ts
function isStandardSchema(schema) {
    return typeof schema === "object" && schema !== null && "~standard" in schema && typeof schema["~standard"] === "object" && schema["~standard"] !== null && "validate" in schema["~standard"];
}
function isStandardJSONSchema(schema) {
    return typeof schema === "object" && schema !== null && "~standard" in schema && typeof schema["~standard"] === "object" && schema["~standard"] !== null && "jsonSchema" in schema["~standard"];
}
function isSerializableSchema(schema) {
    return isStandardSchema(schema) && isStandardJSONSchema(schema);
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/adapter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getJsonSchemaFromSchema",
    ()=>getJsonSchemaFromSchema,
    "getSchemaDefaultGetter",
    ()=>getSchemaDefaultGetter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/types.js [app-route] (ecmascript)");
;
//#region src/state/adapter.ts
/**
* Get the JSON schema from a SerializableSchema.
*/ function getJsonSchemaFromSchema(schema) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isStandardJSONSchema"])(schema)) try {
        return schema["~standard"].jsonSchema.input({
            target: "draft-07"
        });
    } catch  {
        return;
    }
}
/**
* Detect if a schema has a default value by validating `undefined`.
*
* Uses the Standard Schema `~standard.validate` API to detect defaults.
* If the schema accepts `undefined` and returns a value, that value is the default.
*
* This approach is library-agnostic and works with any Standard Schema compliant
* library (Zod, Valibot, ArkType, etc.) without needing to introspect internals.
*
* @param schema - The schema to check for a default value.
* @returns A factory function returning the default, or undefined if no default exists.
*
* @example
* ```ts
* const getter = getSchemaDefaultGetter(z.string().default("hello"));
* getter?.(); // "hello"
*
* const noDefault = getSchemaDefaultGetter(z.string());
* noDefault; // undefined
* ```
*/ function getSchemaDefaultGetter(schema) {
    if (schema == null) return;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isStandardSchema"])(schema)) return;
    try {
        const result = schema["~standard"].validate(void 0);
        if (result && typeof result === "object" && !("then" in result && typeof result.then === "function")) {
            const syncResult = result;
            if (!syncResult.issues) {
                const defaultValue = syncResult.value;
                return ()=>defaultValue;
            }
        }
    } catch  {}
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/untracked_value.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UntrackedValueChannel",
    ()=>UntrackedValueChannel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
;
;
//#region src/channels/untracked_value.ts
const MISSING = Symbol.for("langgraph.channel.missing");
/**
* Stores the last value received, never checkpointed.
*
* This channel stores values during graph execution but does NOT persist
* the value to checkpoints. On restoration from a checkpoint, the value
* will be reset to empty (or the initial value if provided).
*
* Useful for transient state like:
* - Database connections
* - Temporary caches
* - Runtime-only configuration
*
* @internal
*/ var UntrackedValueChannel = class UntrackedValueChannel extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseChannel"] {
    lc_graph_name = "UntrackedValue";
    /**
	* If true, throws an error when multiple values are received in a single step.
	* If false, stores the last value received.
	*/ guard;
    /**
	* The current value. MISSING sentinel indicates no value has been set.
	*/ _value = MISSING;
    /**
	* Optional factory function for the initial value.
	*/ initialValueFactory;
    constructor(options){
        super();
        this.guard = options?.guard ?? true;
        this.initialValueFactory = options?.initialValueFactory;
        if (this.initialValueFactory) this._value = this.initialValueFactory();
    }
    /**
	* Return a new channel, ignoring the checkpoint since we don't persist.
	* The initial value (if any) is restored.
	*/ fromCheckpoint(_checkpoint) {
        return new UntrackedValueChannel({
            guard: this.guard,
            initialValueFactory: this.initialValueFactory
        });
    }
    /**
	* Update the channel with the given values.
	* If guard is true, throws if more than one value is received.
	*/ update(values) {
        if (values.length === 0) return false;
        if (values.length !== 1 && this.guard) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"]("UntrackedValue(guard=true) can receive only one value per step. Use guard=false if you want to store any one of multiple values.", {
            lc_error_code: "INVALID_CONCURRENT_GRAPH_UPDATE"
        });
        this._value = values[values.length - 1];
        return true;
    }
    /**
	* Get the current value.
	* @throws EmptyChannelError if no value has been set.
	*/ get() {
        if (this._value === MISSING) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
        return this._value;
    }
    /**
	* Always returns undefined - untracked values are never checkpointed.
	*/ checkpoint() {}
    /**
	* Return true if a value has been set.
	*/ isAvailable() {
        return this._value !== MISSING;
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/values/reduced.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReducedValue",
    ()=>ReducedValue
]);
//#region src/state/values/reduced.ts
/**
* Symbol for runtime identification of ReducedValue instances.
*/ const REDUCED_VALUE_SYMBOL = Symbol.for("langgraph.state.reduced_value");
/**
* Represents a state field whose value is computed and updated using a reducer function.
*
* {@link ReducedValue} allows you to define accumulators, counters, aggregators, or other fields
* whose value is determined incrementally by applying a reducer to incoming updates.
*
* Each time a new input is provided, the reducer function is called with the current output
* and the new input, producing an updated value. Input validation can be controlled separately
* from output validation by providing an explicit input schema.
*
* @template Value - The type of the value stored in state and produced by reduction.
* @template Input - The type of updates accepted by the reducer.
*
* @example
* // Accumulator with distinct input validation
* const Sum = new ReducedValue(z.number(), {
*   inputSchema: z.number().min(1),
*   reducer: (total, toAdd) => total + toAdd
* });
*
* @example
* // Simple running max, using only the value schema
* const Max = new ReducedValue(z.number(), {
*   reducer: (current, next) => Math.max(current, next)
* });
*/ var ReducedValue = class {
    /**
	* Instance marker for runtime identification.
	* @internal
	*/ [REDUCED_VALUE_SYMBOL] = true;
    /**
	* The schema that describes the type of value stored in state (i.e., after reduction).
	* Note: We use `unknown` for the input type to allow schemas with `.default()` wrappers,
	* where the input type includes `undefined`.
	*/ valueSchema;
    /**
	* The schema used to validate reducer inputs.
	* If not specified explicitly, this defaults to `valueSchema`.
	*/ inputSchema;
    /**
	* The reducer function that combines a current output value and an incoming input.
	*/ reducer;
    /**
	* Optional extra fields to merge into the generated JSON Schema (e.g., for documentation or constraints).
	*/ jsonSchemaExtra;
    constructor(valueSchema, init){
        this.reducer = init.reducer;
        this.jsonSchemaExtra = init.jsonSchemaExtra;
        this.valueSchema = valueSchema;
        this.inputSchema = "inputSchema" in init ? init.inputSchema : valueSchema;
        this.jsonSchemaExtra = init.jsonSchemaExtra;
    }
    static isInstance(value) {
        return typeof value === "object" && value !== null && REDUCED_VALUE_SYMBOL in value && value[REDUCED_VALUE_SYMBOL] === true;
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/values/untracked.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UntrackedValue",
    ()=>UntrackedValue
]);
//#region src/state/values/untracked.ts
/**
* Symbol for runtime identification of UntrackedValue instances.
*/ const UNTRACKED_VALUE_SYMBOL = Symbol.for("langgraph.state.untracked_value");
/**
* Represents a state field whose value is transient and never checkpointed.
*
* Use {@link UntrackedValue} for state fields that should be tracked for the lifetime
* of the process, but should not participate in durable checkpoints or recovery.
*
* @typeParam Value - The type of value stored in this field.
*
* @example
* // Create an untracked in-memory cache
* const cache = new UntrackedValue<Record<string, number>>();
*
* // Use with a type schema for basic runtime validation
* import { z } from "zod";
* const tempSession = new UntrackedValue(z.object({ token: z.string() }), { guard: false });
*
* // You can customize whether to throw on multiple updates per step:
* const session = new UntrackedValue(undefined, { guard: false });
*/ var UntrackedValue = class {
    /**
	* Instance marker for runtime identification.
	* @internal
	*/ [UNTRACKED_VALUE_SYMBOL] = true;
    /**
	* Optional schema describing the type and shape of the value stored in this field.
	*
	* If provided, this can be used for runtime validation or code generation.
	*/ schema;
    /**
	* Whether to guard against multiple updates to this untracked value in a single step.
	*
	* - If `true` (default), throws an error if multiple updates are received in one step.
	* - If `false`, only the last value from that step is kept, others are ignored.
	*
	* This helps prevent accidental state replacement within a step.
	*/ guard;
    /**
	* Create a new untracked value state field.
	*
	* @param schema - Optional type schema describing the value (e.g. a Zod schema).
	* @param init - Optional options for tracking updates or enabling multiple-writes-per-step.
	*/ constructor(schema, init){
        this.schema = schema;
        this.guard = init?.guard ?? true;
    }
    static isInstance(value) {
        return typeof value === "object" && value !== null && UNTRACKED_VALUE_SYMBOL in value;
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/named_barrier_value.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NamedBarrierValue",
    ()=>NamedBarrierValue,
    "NamedBarrierValueAfterFinish",
    ()=>NamedBarrierValueAfterFinish,
    "areSetsEqual",
    ()=>areSetsEqual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
;
;
//#region src/channels/named_barrier_value.ts
const areSetsEqual = (a, b)=>a.size === b.size && [
        ...a
    ].every((value)=>b.has(value));
/**
* A channel that waits until all named values are received before making the value available.
*
* This ensures that if node N and node M both write to channel C, the value of C will not be updated
* until N and M have completed updating.
*/ var NamedBarrierValue = class NamedBarrierValue extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseChannel"] {
    lc_graph_name = "NamedBarrierValue";
    names;
    seen;
    constructor(names){
        super();
        this.names = names;
        this.seen = /* @__PURE__ */ new Set();
    }
    fromCheckpoint(checkpoint) {
        const empty = new NamedBarrierValue(this.names);
        if (typeof checkpoint !== "undefined") empty.seen = new Set(checkpoint);
        return empty;
    }
    update(values) {
        let updated = false;
        for (const nodeName of values)if (this.names.has(nodeName)) {
            if (!this.seen.has(nodeName)) {
                this.seen.add(nodeName);
                updated = true;
            }
        } else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Value ${JSON.stringify(nodeName)} not in names ${JSON.stringify(this.names)}`);
        return updated;
    }
    get() {
        if (!areSetsEqual(this.names, this.seen)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
    }
    checkpoint() {
        return [
            ...this.seen
        ];
    }
    consume() {
        if (this.seen && this.names && areSetsEqual(this.seen, this.names)) {
            this.seen = /* @__PURE__ */ new Set();
            return true;
        }
        return false;
    }
    isAvailable() {
        return !!this.names && areSetsEqual(this.names, this.seen);
    }
};
/**
* A channel that waits until all named values are received before making the value ready to be made available.
* It is only made available after finish() is called.
* @internal
*/ var NamedBarrierValueAfterFinish = class NamedBarrierValueAfterFinish extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseChannel"] {
    lc_graph_name = "NamedBarrierValueAfterFinish";
    names;
    seen;
    finished;
    constructor(names){
        super();
        this.names = names;
        this.seen = /* @__PURE__ */ new Set();
        this.finished = false;
    }
    fromCheckpoint(checkpoint) {
        const empty = new NamedBarrierValueAfterFinish(this.names);
        if (typeof checkpoint !== "undefined") {
            const [seen, finished] = checkpoint;
            empty.seen = new Set(seen);
            empty.finished = finished;
        }
        return empty;
    }
    update(values) {
        let updated = false;
        for (const nodeName of values)if (this.names.has(nodeName) && !this.seen.has(nodeName)) {
            this.seen.add(nodeName);
            updated = true;
        } else if (!this.names.has(nodeName)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Value ${JSON.stringify(nodeName)} not in names ${JSON.stringify(this.names)}`);
        return updated;
    }
    get() {
        if (!this.finished || !areSetsEqual(this.names, this.seen)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
    }
    checkpoint() {
        return [
            [
                ...this.seen
            ],
            this.finished
        ];
    }
    consume() {
        if (this.finished && this.seen && this.names && areSetsEqual(this.seen, this.names)) {
            this.seen = /* @__PURE__ */ new Set();
            this.finished = false;
            return true;
        }
        return false;
    }
    finish() {
        if (!this.finished && !!this.names && areSetsEqual(this.names, this.seen)) {
            this.finished = true;
            return true;
        }
        return false;
    }
    isAvailable() {
        return this.finished && !!this.names && areSetsEqual(this.names, this.seen);
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/any_value.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnyValue",
    ()=>AnyValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
;
;
//#region src/channels/any_value.ts
/**
* Stores the last value received, assumes that if multiple values are received, they are all equal.
*
* Note: Unlike 'LastValue' if multiple nodes write to this channel in a single step, the values
* will be continuously overwritten.
*/ var AnyValue = class AnyValue extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseChannel"] {
    lc_graph_name = "AnyValue";
    value = [];
    constructor(){
        super();
    }
    fromCheckpoint(checkpoint) {
        const empty = new AnyValue();
        if (typeof checkpoint !== "undefined") empty.value = [
            checkpoint
        ];
        return empty;
    }
    update(values) {
        if (values.length === 0) {
            const updated = this.value.length > 0;
            this.value = [];
            return updated;
        }
        this.value = [
            values[values.length - 1]
        ];
        return true;
    }
    get() {
        if (this.value.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
        return this.value[0];
    }
    checkpoint() {
        if (this.value.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
        return this.value[0];
    }
    isAvailable() {
        return this.value.length !== 0;
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/dynamic_barrier_value.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicBarrierValue",
    ()=>DynamicBarrierValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$named_barrier_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/named_barrier_value.js [app-route] (ecmascript)");
;
;
;
//#region src/channels/dynamic_barrier_value.ts
function isWaitForNames(v) {
    return v.__names !== void 0;
}
/**
* A channel that switches between two states
*
* - in the "priming" state it can't be read from.
*     - if it receives a WaitForNames update, it switches to the "waiting" state.
* - in the "waiting" state it collects named values until all are received.
*     - once all named values are received, it can be read once, and it switches
*       back to the "priming" state.
*/ var DynamicBarrierValue = class DynamicBarrierValue extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseChannel"] {
    lc_graph_name = "DynamicBarrierValue";
    names;
    seen;
    constructor(){
        super();
        this.names = void 0;
        this.seen = /* @__PURE__ */ new Set();
    }
    fromCheckpoint(checkpoint) {
        const empty = new DynamicBarrierValue();
        if (typeof checkpoint !== "undefined") {
            empty.names = new Set(checkpoint[0]);
            empty.seen = new Set(checkpoint[1]);
        }
        return empty;
    }
    update(values) {
        const waitForNames = values.filter(isWaitForNames);
        if (waitForNames.length > 0) {
            if (waitForNames.length > 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"]("Received multiple WaitForNames updates in the same step.");
            this.names = new Set(waitForNames[0].__names);
            return true;
        } else if (this.names !== void 0) {
            let updated = false;
            for (const value of values){
                if (isWaitForNames(value)) throw new Error("Assertion Error: Received unexpected WaitForNames instance.");
                if (this.names.has(value) && !this.seen.has(value)) {
                    this.seen.add(value);
                    updated = true;
                }
            }
            return updated;
        }
        return false;
    }
    consume() {
        if (this.seen && this.names && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$named_barrier_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["areSetsEqual"])(this.seen, this.names)) {
            this.seen = /* @__PURE__ */ new Set();
            this.names = void 0;
            return true;
        }
        return false;
    }
    get() {
        if (!this.names || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$named_barrier_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["areSetsEqual"])(this.names, this.seen)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyChannelError"]();
    }
    checkpoint() {
        return [
            this.names ? [
                ...this.names
            ] : void 0,
            [
                ...this.seen
            ]
        ];
    }
    isAvailable() {
        return !!this.names && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$named_barrier_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["areSetsEqual"])(this.names, this.seen);
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$binop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/binop.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/last_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$topic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/topic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$ephemeral_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/ephemeral_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$named_barrier_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/named_barrier_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$any_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/any_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$dynamic_barrier_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/dynamic_barrier_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$untracked_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/untracked_value.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/schema.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StateSchema",
    ()=>StateSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$binop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/binop.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/last_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/adapter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$untracked_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/untracked_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$reduced$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/values/reduced.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$untracked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/values/untracked.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
//#region src/state/schema.ts
const STATE_SCHEMA_SYMBOL = Symbol.for("langgraph.state.state_schema");
/**
* StateSchema provides a unified API for defining LangGraph state schemas.
*
* @example
* ```ts
* import { z } from "zod";
* import { StateSchema, ReducedValue, MessagesValue } from "@langchain/langgraph";
*
* const AgentState = new StateSchema({
*   // Prebuilt messages value
*   messages: MessagesValue,
*   // Basic LastValue channel from any standard schema
*   currentStep: z.string(),
*   // LastValue with native default
*   count: z.number().default(0),
*   // ReducedValue for fields needing reducers
*   history: new ReducedValue(
*     z.array(z.string()).default(() => []),
*     {
*       inputSchema: z.string(),
*       reducer: (current, next) => [...current, next],
*     }
*   ),
* });
*
* // Extract types
* type State = typeof AgentState.State;
* type Update = typeof AgentState.Update;
*
* // Use in StateGraph
* const graph = new StateGraph(AgentState);
* ```
*/ var StateSchema = class {
    /**
	* Symbol for runtime identification.
	* @internal Used by isInstance for runtime type checking
	*/ [STATE_SCHEMA_SYMBOL] = true;
    constructor(fields){
        this.fields = fields;
    }
    /**
	* Get the channel definitions for use with StateGraph.
	* This converts the StateSchema fields into BaseChannel instances.
	*/ getChannels() {
        const channels = {};
        for (const [key, value] of Object.entries(this.fields))if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$reduced$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReducedValue"].isInstance(value)) {
            const defaultGetter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaDefaultGetter"])(value.valueSchema);
            channels[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$binop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryOperatorAggregate"](value.reducer, defaultGetter);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$untracked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UntrackedValue"].isInstance(value)) {
            const defaultGetter = value.schema ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaDefaultGetter"])(value.schema) : void 0;
            channels[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$untracked_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UntrackedValueChannel"]({
                guard: value.guard,
                initialValueFactory: defaultGetter
            });
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isStandardSchema"])(value)) channels[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LastValue"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaDefaultGetter"])(value));
        else throw new Error(`Invalid state field "${key}": must be a schema, ReducedValue, UntrackedValue, or ManagedValue`);
        return channels;
    }
    /**
	* Get the JSON schema for the full state type.
	* Used by Studio and API for schema introspection.
	*/ getJsonSchema() {
        const properties = {};
        const required = [];
        for (const [key, value] of Object.entries(this.fields)){
            let fieldSchema;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$reduced$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReducedValue"].isInstance(value)) {
                fieldSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getJsonSchemaFromSchema"])(value.valueSchema);
                if (value.jsonSchemaExtra) fieldSchema = {
                    ...fieldSchema ?? {},
                    ...value.jsonSchemaExtra
                };
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$untracked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UntrackedValue"].isInstance(value)) fieldSchema = value.schema ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getJsonSchemaFromSchema"])(value.schema) : void 0;
            else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isStandardSchema"])(value)) fieldSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getJsonSchemaFromSchema"])(value);
            if (fieldSchema) {
                properties[key] = fieldSchema;
                let hasDefault = false;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$reduced$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReducedValue"].isInstance(value)) hasDefault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaDefaultGetter"])(value.valueSchema) !== void 0;
                else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$untracked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UntrackedValue"].isInstance(value)) hasDefault = value.schema ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaDefaultGetter"])(value.schema) !== void 0 : false;
                else hasDefault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaDefaultGetter"])(value) !== void 0;
                if (!hasDefault) required.push(key);
            }
        }
        return {
            type: "object",
            properties,
            required: required.length > 0 ? required : void 0
        };
    }
    /**
	* Get the JSON schema for the update/input type.
	* All fields are optional in updates.
	*/ getInputJsonSchema() {
        const properties = {};
        for (const [key, value] of Object.entries(this.fields)){
            let fieldSchema;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$reduced$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReducedValue"].isInstance(value)) {
                fieldSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getJsonSchemaFromSchema"])(value.inputSchema);
                if (value.jsonSchemaExtra) fieldSchema = {
                    ...fieldSchema ?? {},
                    ...value.jsonSchemaExtra
                };
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$untracked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UntrackedValue"].isInstance(value)) fieldSchema = value.schema ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getJsonSchemaFromSchema"])(value.schema) : void 0;
            else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isStandardSchema"])(value)) fieldSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getJsonSchemaFromSchema"])(value);
            if (fieldSchema) properties[key] = fieldSchema;
        }
        return {
            type: "object",
            properties
        };
    }
    /**
	* Get the list of channel keys (excluding managed values).
	*/ getChannelKeys() {
        return Object.entries(this.fields).map(([key])=>key);
    }
    /**
	* Get all keys (channels + managed values).
	*/ getAllKeys() {
        return Object.keys(this.fields);
    }
    /**
	* Validate input data against the schema.
	* This validates each field using its corresponding schema.
	*
	* @param data - The input data to validate
	* @returns The validated data with coerced types
	*/ async validateInput(data) {
        if (data == null || typeof data !== "object") return data;
        const result = {};
        for (const [key, value] of Object.entries(data)){
            const fieldDef = this.fields[key];
            if (fieldDef === void 0) {
                result[key] = value;
                continue;
            }
            let schema;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$reduced$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReducedValue"].isInstance(fieldDef)) schema = fieldDef.inputSchema;
            else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$untracked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UntrackedValue"].isInstance(fieldDef)) schema = fieldDef.schema;
            else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isStandardSchema"])(fieldDef)) schema = fieldDef;
            if (schema) {
                const validationResult = await schema["~standard"].validate(value);
                if (validationResult.issues) throw new Error(`Validation failed for field "${key}": ${JSON.stringify(validationResult.issues)}`);
                result[key] = validationResult.value;
            } else result[key] = value;
        }
        return result;
    }
    static isInstance(value) {
        return typeof value === "object" && value !== null && STATE_SCHEMA_SYMBOL in value && value[STATE_SCHEMA_SYMBOL] === true;
    }
};
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/messages_reducer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REMOVE_ALL_MESSAGES",
    ()=>REMOVE_ALL_MESSAGES,
    "messagesStateReducer",
    ()=>messagesStateReducer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/messages/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$modifier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/messages/modifier.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/messages/utils.js [app-route] (ecmascript)");
;
;
//#region src/graph/messages_reducer.ts
/**
* Special value that signifies the intent to remove all previous messages in the state reducer.
* Used as the unique identifier for a `RemoveMessage` instance which, when encountered,
* causes all prior messages to be discarded, leaving only those following this marker.
*/ const REMOVE_ALL_MESSAGES = "__remove_all__";
/**
* Reducer function for combining two sets of messages in LangGraph's state system.
*
* This reducer handles several tasks:
* 1. Normalizes both `left` and `right` message inputs to arrays.
* 2. Coerces any message-like objects into real `BaseMessage` instances.
* 3. Ensures all messages have unique, stable IDs by generating missing ones.
* 4. If a `RemoveMessage` instance is encountered in `right` with the ID `REMOVE_ALL_MESSAGES`,
*    all previous messages are discarded and only the subsequent messages in `right` are returned.
* 5. Otherwise, merges `left` and `right` messages together following these rules:
*    - If a message in `right` shares an ID with a message in `left`:
*      - If it is a `RemoveMessage`, that message (by ID) is marked for removal.
*      - If it is a normal message, it replaces the message with the same ID from `left`.
*    - If a message in `right` **does not exist** in `left`:
*      - If it is a `RemoveMessage`, this is considered an error (cannot remove non-existent ID).
*      - Otherwise, the message is appended.
*    - Messages flagged for removal are omitted from the final output.
*
* @param left - The existing array (or single message) of messages from current state.
* @param right - The new array (or single message) of messages to be applied.
* @returns A new array of `BaseMessage` objects representing the updated state.
*
* @throws Error if a `RemoveMessage` is used to delete a message with an ID that does not exist in the merged list.
*
* @example
* ```ts
* const msg1 = new AIMessage("hello");
* const msg2 = new HumanMessage("hi");
* const removal = new RemoveMessage({ id: msg1.id });
* const newState = messagesStateReducer([msg1], [msg2, removal]);
* // newState will only contain msg2 (msg1 is removed)
* ```
*/ function messagesStateReducer(left, right) {
    const leftArray = Array.isArray(left) ? left : [
        left
    ];
    const rightArray = Array.isArray(right) ? right : [
        right
    ];
    const leftMessages = leftArray.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceMessageLikeToMessage"]);
    const rightMessages = rightArray.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceMessageLikeToMessage"]);
    for (const m of leftMessages)if (m.id === null || m.id === void 0) {
        m.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
        m.lc_kwargs.id = m.id;
    }
    let removeAllIdx;
    for(let i = 0; i < rightMessages.length; i += 1){
        const m = rightMessages[i];
        if (m.id === null || m.id === void 0) {
            m.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            m.lc_kwargs.id = m.id;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$modifier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RemoveMessage"].isInstance(m) && m.id === "__remove_all__") removeAllIdx = i;
    }
    if (removeAllIdx != null) return rightMessages.slice(removeAllIdx + 1);
    const merged = [
        ...leftMessages
    ];
    const mergedById = new Map(merged.map((m, i)=>[
            m.id,
            i
        ]));
    const idsToRemove = /* @__PURE__ */ new Set();
    for (const m of rightMessages){
        const existingIdx = mergedById.get(m.id);
        if (existingIdx !== void 0) if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$modifier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RemoveMessage"].isInstance(m)) idsToRemove.add(m.id);
        else {
            idsToRemove.delete(m.id);
            merged[existingIdx] = m;
        }
        else {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$modifier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RemoveMessage"].isInstance(m)) throw new Error(`Attempting to delete a message with an ID that doesn't exist ('${m.id}')`);
            mergedById.set(m.id, merged.length);
            merged.push(m);
        }
    }
    return merged.filter((m)=>!idsToRemove.has(m.id));
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/prebuilt/messages.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessagesValue",
    ()=>MessagesValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$reduced$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/values/reduced.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$messages_reducer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/messages_reducer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
;
;
const MessagesValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$reduced$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReducedValue"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom().default(()=>[]), {
    inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom(),
    reducer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$messages_reducer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["messagesStateReducer"],
    jsonSchemaExtra: {
        langgraph_type: "messages",
        description: "A list of chat messages"
    }
});
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/prebuilt/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$prebuilt$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/prebuilt/messages.js [app-route] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/values/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/adapter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/schema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$prebuilt$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/prebuilt/messages.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$prebuilt$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/prebuilt/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/values/index.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/zod/meta.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "META_EXTRAS_DESCRIPTION_PREFIX",
    ()=>META_EXTRAS_DESCRIPTION_PREFIX,
    "SchemaMetaRegistry",
    ()=>SchemaMetaRegistry,
    "schemaMetaRegistry",
    ()=>schemaMetaRegistry,
    "withLangGraph",
    ()=>withLangGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$binop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/binop.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/last_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/utils/types/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/utils/types/zod.js [app-route] (ecmascript)");
;
;
;
//#region src/graph/zod/meta.ts
const META_EXTRAS_DESCRIPTION_PREFIX = "lg:";
/**
* A registry for storing and managing metadata associated with schemas.
* This class provides methods to get, extend, remove, and check metadata for a given schema.
*/ var SchemaMetaRegistry = class {
    /**
	* Internal map storing schema metadata.
	* @internal
	*/ _map = /* @__PURE__ */ new Map();
    /**
	* Cache for extended schemas.
	* @internal
	*/ _extensionCache = /* @__PURE__ */ new Map();
    /**
	* Retrieves the metadata associated with a given schema.
	* @template TValue The value type of the schema.
	* @template TUpdate The update type of the schema (defaults to TValue).
	* @param schema The schema to retrieve metadata for.
	* @returns The associated SchemaMeta, or undefined if not present.
	*/ get(schema) {
        return this._map.get(schema);
    }
    /**
	* Extends or sets the metadata for a given schema.
	* @template TValue The value type of the schema.
	* @template TUpdate The update type of the schema (defaults to TValue).
	* @param schema The schema to extend metadata for.
	* @param predicate A function that receives the existing metadata (or undefined) and returns the new metadata.
	*/ extend(schema, predicate) {
        const existingMeta = this.get(schema);
        this._map.set(schema, predicate(existingMeta));
    }
    /**
	* Removes the metadata associated with a given schema.
	* @param schema The schema to remove metadata for.
	* @returns The SchemaMetaRegistry instance (for chaining).
	*/ remove(schema) {
        this._map.delete(schema);
        return this;
    }
    /**
	* Checks if metadata exists for a given schema.
	* @param schema The schema to check.
	* @returns True if metadata exists, false otherwise.
	*/ has(schema) {
        return this._map.has(schema);
    }
    /**
	* Returns a mapping of channel instances for each property in the schema
	* using the associated metadata in the registry.
	*
	* This is used to create the `channels` object that's passed to the `Graph` constructor.
	*
	* @template T The shape of the schema.
	* @param schema The schema to extract channels from.
	* @returns A mapping from property names to channel instances.
	*/ getChannelsForSchema(schema) {
        const channels = {};
        const shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInteropZodObjectShape"])(schema);
        for (const [key, channelSchema] of Object.entries(shape)){
            const meta = this.get(channelSchema);
            if (meta?.reducer) channels[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$binop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryOperatorAggregate"](meta.reducer.fn, meta.default);
            else channels[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LastValue"](meta?.default);
        }
        return channels;
    }
    /**
	* Returns a modified schema that introspectively looks at all keys of the provided
	* object schema, and applies the augmentations based on meta provided with those keys
	* in the registry and the selectors provided in the `effects` parameter.
	*
	* This assumes that the passed in schema is the "root" schema object for a graph where
	* the keys of the schema are the channels of the graph. Because we need to represent
	* the input of a graph in a couple of different ways, the `effects` parameter allows
	* us to apply those augmentations based on pre determined conditions.
	*
	* @param schema The root schema object to extend.
	* @param effects The effects that are being applied.
	* @returns The extended schema.
	*/ getExtendedChannelSchemas(schema, effects) {
        if (Object.keys(effects).length === 0) return schema;
        const cacheKey = Object.entries(effects).filter(([, v])=>v === true).sort(([a], [b])=>a.localeCompare(b)).map(([k, v])=>`${k}:${v}`).join("|");
        const cache = this._extensionCache.get(cacheKey) ?? /* @__PURE__ */ new Map();
        if (cache.has(schema)) return cache.get(schema);
        let modifiedSchema = schema;
        if (effects.withReducerSchema || effects.withJsonSchemaExtrasAsDescription) {
            const newShapeEntries = Object.entries((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInteropZodObjectShape"])(schema)).map(([key, schema])=>{
                const meta = this.get(schema);
                let outputSchema = effects.withReducerSchema ? meta?.reducer?.schema ?? schema : schema;
                if (effects.withJsonSchemaExtrasAsDescription && meta?.jsonSchemaExtra) {
                    const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaDescription"])(outputSchema) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaDescription"])(schema);
                    const strExtras = JSON.stringify({
                        ...meta.jsonSchemaExtra,
                        description
                    });
                    outputSchema = outputSchema.describe(`lg:${strExtras}`);
                }
                return [
                    key,
                    outputSchema
                ];
            });
            modifiedSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendInteropZodObject"])(schema, Object.fromEntries(newShapeEntries));
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isZodSchemaV3"])(modifiedSchema)) modifiedSchema._def.unknownKeys = "strip";
        }
        if (effects.asPartial) modifiedSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interopZodObjectPartial"])(modifiedSchema);
        cache.set(schema, modifiedSchema);
        this._extensionCache.set(cacheKey, cache);
        return modifiedSchema;
    }
};
const schemaMetaRegistry = new SchemaMetaRegistry();
function withLangGraph(schema, meta) {
    if (meta.reducer && !meta.default) {
        const defaultValueGetter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInteropZodDefaultGetter"])(schema);
        if (defaultValueGetter != null) meta.default = defaultValueGetter;
    }
    if (meta.reducer) {
        const schemaWithReducer = Object.assign(schema, {
            lg_reducer_schema: meta.reducer?.schema ?? schema
        });
        schemaMetaRegistry.extend(schemaWithReducer, ()=>meta);
        return schemaWithReducer;
    } else {
        schemaMetaRegistry.extend(schema, ()=>meta);
        return schema;
    }
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/types.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isStateDefinitionInit",
    ()=>isStateDefinitionInit,
    "isStateGraphInit",
    ()=>isStateGraphInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/schema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/utils/types/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/utils/types/zod.js [app-route] (ecmascript)");
;
;
;
;
//#region src/graph/types.ts
/**
* Check if a value is a valid StateDefinitionInit type.
* Supports: StateSchema, InteropZodObject (Zod), AnnotationRoot, StateDefinition
*
* @internal
*/ function isStateDefinitionInit(value) {
    if (value == null) return false;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StateSchema"].isInstance(value)) return true;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteropZodObject"])(value)) return true;
    if (typeof value === "object" && "lc_graph_name" in value && value.lc_graph_name === "AnnotationRoot") return true;
    if (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length > 0 && Object.values(value).every((v)=>typeof v === "function" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isBaseChannel"])(v))) return true;
    return false;
}
/**
* Check if a value is a StateGraphInit object (has state, stateSchema, or input with valid schema).
*
* @internal
*/ function isStateGraphInit(value) {
    if (typeof value !== "object" || value == null) return false;
    const obj = value;
    const hasState = "state" in obj && isStateDefinitionInit(obj.state);
    const hasStateSchema = "stateSchema" in obj && isStateDefinitionInit(obj.stateSchema);
    const hasInput = "input" in obj && isStateDefinitionInit(obj.input);
    if (!hasState && !hasStateSchema && !hasInput) return false;
    if ("input" in obj && obj.input != null && !isStateDefinitionInit(obj.input)) return false;
    if ("output" in obj && obj.output != null && !isStateDefinitionInit(obj.output)) return false;
    return true;
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/state.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompiledStateGraph",
    ()=>CompiledStateGraph,
    "StateGraph",
    ()=>StateGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/last_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/annotation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/write.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$read$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/read.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$subgraph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/subgraph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$ephemeral_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/ephemeral_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/graph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$named_barrier_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/named_barrier_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/schema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$zod$2f$meta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/zod/meta.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/runnables/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/utils/types/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/utils/types/zod.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//#region src/graph/state.ts
const ROOT = "__root__";
const PartialStateSchema = Symbol.for("langgraph.state.partial");
/**
* A graph whose nodes communicate by reading and writing to a shared state.
* Each node takes a defined `State` as input and returns a `Partial<State>`.
*
* Each state key can optionally be annotated with a reducer function that
* will be used to aggregate the values of that key received from multiple nodes.
* The signature of a reducer function is (left: Value, right: UpdateValue) => Value.
*
* See {@link Annotation} for more on defining state.
*
* After adding nodes and edges to your graph, you must call `.compile()` on it before
* you can use it.
*
* @typeParam SD - The state definition used to construct the graph. Can be an
*   {@link AnnotationRoot}, {@link StateSchema}, or Zod object schema. This is the
*   primary generic from which `S` and `U` are derived.
*
* @typeParam S - The full state type representing the complete shape of your graph's
*   state after all reducers have been applied. Automatically inferred from `SD`.
*
* @typeParam U - The update type representing what nodes can return to modify state.
*   Typically a partial of the state type. Automatically inferred from `SD`.
*
* @typeParam N - Union of all node names in the graph (e.g., `"agent" | "tool"`).
*   Accumulated as you call `.addNode()`. Used for type-safe routing.
*
* @typeParam I - The input schema definition. Set via the `input` option in the
*   constructor to restrict what data the graph accepts when invoked.
*
* @typeParam O - The output schema definition. Set via the `output` option in the
*   constructor to restrict what data the graph returns after execution.
*
* @typeParam C - The config/context schema definition. Set via the `context` option
*   to define additional configuration passed at runtime.
*
* @typeParam NodeReturnType - Constrains what types nodes in this graph can return.
*
* @typeParam InterruptType - The type for {@link interrupt} resume values. Set via
*   the `interrupt` option for typed human-in-the-loop patterns.
*
* @typeParam WriterType - The type for custom stream writers. Set via the `writer`
*   option to enable typed custom streaming from within nodes.
*
* @example
* ```ts
* import {
*   type BaseMessage,
*   AIMessage,
*   HumanMessage,
* } from "@langchain/core/messages";
* import { StateGraph, Annotation } from "@langchain/langgraph";
*
* // Define a state with a single key named "messages" that will
* // combine a returned BaseMessage or arrays of BaseMessages
* const StateAnnotation = Annotation.Root({
*   sentiment: Annotation<string>,
*   messages: Annotation<BaseMessage[]>({
*     reducer: (left: BaseMessage[], right: BaseMessage | BaseMessage[]) => {
*       if (Array.isArray(right)) {
*         return left.concat(right);
*       }
*       return left.concat([right]);
*     },
*     default: () => [],
*   }),
* });
*
* const graphBuilder = new StateGraph(StateAnnotation);
*
* // A node in the graph that returns an object with a "messages" key
* // will update the state by combining the existing value with the returned one.
* const myNode = (state: typeof StateAnnotation.State) => {
*   return {
*     messages: [new AIMessage("Some new response")],
*     sentiment: "positive",
*   };
* };
*
* const graph = graphBuilder
*   .addNode("myNode", myNode)
*   .addEdge("__start__", "myNode")
*   .addEdge("myNode", "__end__")
*   .compile();
*
* await graph.invoke({ messages: [new HumanMessage("how are you?")] });
*
* // {
* //   messages: [HumanMessage("how are you?"), AIMessage("Some new response")],
* //   sentiment: "positive",
* // }
* ```
*/ var StateGraph = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Graph"] {
    channels = {};
    waitingEdges = /* @__PURE__ */ new Set();
    /** @internal */ _schemaDefinition;
    /** @internal */ _schemaRuntimeDefinition;
    /** @internal */ _inputDefinition;
    /** @internal */ _inputRuntimeDefinition;
    /** @internal */ _outputDefinition;
    /** @internal */ _outputRuntimeDefinition;
    /**
	* Map schemas to managed values
	* @internal
	*/ _schemaDefinitions = /* @__PURE__ */ new Map();
    /** @internal */ _metaRegistry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$zod$2f$meta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["schemaMetaRegistry"];
    /** @internal Used only for typing. */ _configSchema;
    /** @internal */ _configRuntimeSchema;
    /** @internal */ _interrupt;
    /** @internal */ _writer;
    constructor(stateOrInit, options){
        super();
        const init = this._normalizeToStateGraphInit(stateOrInit, options);
        const stateSchema = init.state ?? init.stateSchema ?? init.input;
        if (!stateSchema) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StateGraphInputError"]();
        const stateChannelDef = this._getChannelsFromSchema(stateSchema);
        this._schemaDefinition = stateChannelDef;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StateSchema"].isInstance(stateSchema)) this._schemaRuntimeDefinition = stateSchema;
        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteropZodObject"])(stateSchema)) this._schemaRuntimeDefinition = stateSchema;
        if (init.input) if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StateSchema"].isInstance(init.input)) this._inputRuntimeDefinition = init.input;
        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteropZodObject"])(init.input)) this._inputRuntimeDefinition = init.input;
        else this._inputRuntimeDefinition = PartialStateSchema;
        else this._inputRuntimeDefinition = PartialStateSchema;
        if (init.output) if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StateSchema"].isInstance(init.output)) this._outputRuntimeDefinition = init.output;
        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteropZodObject"])(init.output)) this._outputRuntimeDefinition = init.output;
        else this._outputRuntimeDefinition = this._schemaRuntimeDefinition;
        else this._outputRuntimeDefinition = this._schemaRuntimeDefinition;
        const inputChannelDef = init.input ? this._getChannelsFromSchema(init.input) : stateChannelDef;
        const outputChannelDef = init.output ? this._getChannelsFromSchema(init.output) : stateChannelDef;
        this._inputDefinition = inputChannelDef;
        this._outputDefinition = outputChannelDef;
        this._addSchema(this._schemaDefinition);
        this._addSchema(this._inputDefinition);
        this._addSchema(this._outputDefinition);
        if (init.context) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteropZodObject"])(init.context)) this._configRuntimeSchema = init.context;
        }
        this._interrupt = init.interrupt;
        this._writer = init.writer;
    }
    /**
	* Normalize all constructor input patterns to a unified StateGraphInit object.
	* @internal
	*/ _normalizeToStateGraphInit(stateOrInit, options) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isStateGraphInit"])(stateOrInit)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteropZodObject"])(options) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnnotationRoot"].isInstance(options)) return {
                ...stateOrInit,
                context: options
            };
            const opts = options;
            return {
                ...stateOrInit,
                input: stateOrInit.input ?? opts?.input,
                output: stateOrInit.output ?? opts?.output,
                context: stateOrInit.context ?? opts?.context,
                interrupt: stateOrInit.interrupt ?? opts?.interrupt,
                writer: stateOrInit.writer ?? opts?.writer,
                nodes: stateOrInit.nodes ?? opts?.nodes
            };
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isStateDefinitionInit"])(stateOrInit)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteropZodObject"])(options) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AnnotationRoot"].isInstance(options)) return {
                state: stateOrInit,
                context: options
            };
            const opts = options;
            return {
                state: stateOrInit,
                input: opts?.input,
                output: opts?.output,
                context: opts?.context,
                interrupt: opts?.interrupt,
                writer: opts?.writer,
                nodes: opts?.nodes
            };
        }
        if (isStateGraphArgs(stateOrInit)) return {
            state: _getChannels(stateOrInit.channels)
        };
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StateGraphInputError"]();
    }
    /**
	* Convert any supported schema type to a StateDefinition (channel map).
	* @internal
	*/ _getChannelsFromSchema(schema) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StateSchema"].isInstance(schema)) return schema.getChannels();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteropZodObject"])(schema)) return this._metaRegistry.getChannelsForSchema(schema);
        if (typeof schema === "object" && "lc_graph_name" in schema && schema.lc_graph_name === "AnnotationRoot") return schema.spec;
        if (typeof schema === "object" && !Array.isArray(schema) && Object.keys(schema).length > 0) return schema;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StateGraphInputError"]("Invalid schema type. Expected StateSchema, Zod object, AnnotationRoot, or StateDefinition.");
    }
    get allEdges() {
        return new Set([
            ...this.edges,
            ...Array.from(this.waitingEdges).flatMap(([starts, end])=>starts.map((start)=>[
                        start,
                        end
                    ]))
        ]);
    }
    _addSchema(stateDefinition) {
        if (this._schemaDefinitions.has(stateDefinition)) return;
        this._schemaDefinitions.set(stateDefinition, stateDefinition);
        for (const [key, val] of Object.entries(stateDefinition)){
            let channel;
            if (typeof val === "function") channel = val();
            else channel = val;
            if (this.channels[key] !== void 0) {
                if (!this.channels[key].equals(channel)) {
                    if (channel.lc_graph_name !== "LastValue") throw new Error(`Channel "${key}" already exists with a different type.`);
                }
            } else this.channels[key] = channel;
        }
    }
    addNode(...args) {
        function isMultipleNodes(args) {
            return args.length >= 1 && typeof args[0] !== "string";
        }
        const nodes = isMultipleNodes(args) ? Array.isArray(args[0]) ? args[0] : Object.entries(args[0]).map(([key, action])=>[
                key,
                action
            ]) : [
            [
                args[0],
                args[1],
                args[2]
            ]
        ];
        if (nodes.length === 0) throw new Error("No nodes provided in `addNode`");
        for (const [key, action, options] of nodes){
            if (key in this.channels) throw new Error(`${key} is already being used as a state attribute (a.k.a. a channel), cannot also be used as a node name.`);
            for (const reservedChar of [
                "|",
                ":"
            ])if (key.includes(reservedChar)) throw new Error(`"${reservedChar}" is a reserved character and is not allowed in node names.`);
            this.warnIfCompiled(`Adding a node to a graph that has already been compiled. This will not be reflected in the compiled graph.`);
            if (key in this.nodes) throw new Error(`Node \`${key}\` already present.`);
            if (key === "__end__" || key === "__start__") throw new Error(`Node \`${key}\` is reserved.`);
            let inputSpec = this._schemaDefinition;
            if (options?.input !== void 0) inputSpec = this._getChannelsFromSchema(options.input);
            this._addSchema(inputSpec);
            let runnable;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Runnable"].isRunnable(action)) runnable = action;
            else if (typeof action === "function") runnable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableCallable"]({
                func: action,
                name: key,
                trace: false
            });
            else runnable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$runnables$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_coerceToRunnable"])(action);
            let cachePolicy = options?.cachePolicy;
            if (typeof cachePolicy === "boolean") cachePolicy = cachePolicy ? {} : void 0;
            const nodeSpec = {
                runnable,
                retryPolicy: options?.retryPolicy,
                cachePolicy,
                metadata: options?.metadata,
                input: inputSpec ?? this._schemaDefinition,
                subgraphs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$subgraph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPregelLike"])(runnable) ? [
                    runnable
                ] : options?.subgraphs,
                ends: options?.ends,
                defer: options?.defer
            };
            this.nodes[key] = nodeSpec;
        }
        return this;
    }
    addEdge(startKey, endKey) {
        if (typeof startKey === "string") return super.addEdge(startKey, endKey);
        if (this.compiled) console.warn("Adding an edge to a graph that has already been compiled. This will not be reflected in the compiled graph.");
        for (const start of startKey){
            if (start === "__end__") throw new Error("END cannot be a start node");
            if (!Object.keys(this.nodes).some((node)=>node === start)) throw new Error(`Need to add a node named "${start}" first`);
        }
        if (endKey === "__end__") throw new Error("END cannot be an end node");
        if (!Object.keys(this.nodes).some((node)=>node === endKey)) throw new Error(`Need to add a node named "${endKey}" first`);
        this.waitingEdges.add([
            startKey,
            endKey
        ]);
        return this;
    }
    addSequence(nodes) {
        const parsedNodes = Array.isArray(nodes) ? nodes : Object.entries(nodes);
        if (parsedNodes.length === 0) throw new Error("Sequence requires at least one node.");
        let previousNode;
        for (const [key, action, options] of parsedNodes){
            if (key in this.nodes) throw new Error(`Node names must be unique: node with the name "${key}" already exists.`);
            const validKey = key;
            this.addNode(validKey, action, options);
            if (previousNode != null) this.addEdge(previousNode, validKey);
            previousNode = validKey;
        }
        return this;
    }
    compile({ checkpointer, store, cache, interruptBefore, interruptAfter, name, description } = {}) {
        this.validate([
            ...Array.isArray(interruptBefore) ? interruptBefore : [],
            ...Array.isArray(interruptAfter) ? interruptAfter : []
        ]);
        const outputKeys = Object.keys(this._schemaDefinitions.get(this._outputDefinition));
        const outputChannels = outputKeys.length === 1 && outputKeys[0] === ROOT ? ROOT : outputKeys;
        const streamKeys = Object.keys(this.channels);
        const streamChannels = streamKeys.length === 1 && streamKeys[0] === ROOT ? ROOT : streamKeys;
        const userInterrupt = this._interrupt;
        const compiled = new CompiledStateGraph({
            builder: this,
            checkpointer,
            interruptAfter,
            interruptBefore,
            autoValidate: false,
            nodes: {},
            channels: {
                ...this.channels,
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"]]: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$ephemeral_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EphemeralValue"]()
            },
            inputChannels: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"],
            outputChannels,
            streamChannels,
            streamMode: "updates",
            store,
            cache,
            name,
            description,
            userInterrupt
        });
        compiled.attachNode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"]);
        for (const [key, node] of Object.entries(this.nodes))compiled.attachNode(key, node);
        compiled.attachBranch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SELF"], _getControlBranch(), {
            withReader: false
        });
        for (const [key] of Object.entries(this.nodes))compiled.attachBranch(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SELF"], _getControlBranch(), {
            withReader: false
        });
        for (const [start, end] of this.edges)compiled.attachEdge(start, end);
        for (const [starts, end] of this.waitingEdges)compiled.attachEdge(starts, end);
        for (const [start, branches] of Object.entries(this.branches))for (const [name, branch] of Object.entries(branches))compiled.attachBranch(start, name, branch);
        return compiled.validate();
    }
};
function _getChannels(schema) {
    const channels = {};
    for (const [name, val] of Object.entries(schema))if (name === ROOT) channels[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getChannel"])(val);
    else channels[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getChannel"])(val);
    return channels;
}
/**
* Final result from building and compiling a {@link StateGraph}.
* Should not be instantiated directly, only using the StateGraph `.compile()`
* instance method.
*
* @typeParam S - The full state type representing the complete shape of your graph's
*   state after all reducers have been applied. This is the type you receive when
*   reading state in nodes or after invoking the graph.
*
* @typeParam U - The update type representing what nodes can return to modify state.
*   Typically a partial of the state type, allowing nodes to update only specific fields.
*   Can also include {@link Command} objects for advanced control flow.
*
* @typeParam N - Union of all node names in the graph (e.g., `"agent" | "tool"`).
*   Used for type-safe routing with {@link Command.goto} and edge definitions.
*
* @typeParam I - The input schema definition. Determines what shape of data the graph
*   accepts when invoked. Defaults to the main state schema if not explicitly set.
*
* @typeParam O - The output schema definition. Determines what shape of data the graph
*   returns after execution. Defaults to the main state schema if not explicitly set.
*
* @typeParam C - The config/context schema definition. Defines additional configuration
*   that can be passed to the graph at runtime via {@link LangGraphRunnableConfig}.
*
* @typeParam NodeReturnType - Constrains what types nodes in this graph can return.
*   Useful for enforcing consistent return patterns across all nodes.
*
* @typeParam InterruptType - The type of values that can be passed when resuming from
*   an {@link interrupt}. Used with human-in-the-loop patterns.
*
* @typeParam WriterType - The type for custom stream writers. Used with the `writer`
*   option to enable typed custom streaming from within nodes.
*/ var CompiledStateGraph = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CompiledGraph"] {
    /**
	* The description of the compiled graph.
	* This is used by the supervisor agent to describe the handoff to the agent.
	*/ description;
    /** @internal */ _metaRegistry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$zod$2f$meta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["schemaMetaRegistry"];
    constructor({ description, ...rest }){
        super(rest);
        this.description = description;
    }
    attachNode(key, node) {
        let outputKeys;
        if (key === "__start__") outputKeys = Object.entries(this.builder._schemaDefinitions.get(this.builder._inputDefinition)).map(([k])=>k);
        else outputKeys = Object.keys(this.builder.channels);
        function _getRoot(input) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])(input)) {
                if (input.graph === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"].PARENT) return null;
                return input._updateAsTuples();
            } else if (Array.isArray(input) && input.length > 0 && input.some((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])(i))) {
                const updates = [];
                for (const i of input)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])(i)) {
                    if (i.graph === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"].PARENT) continue;
                    updates.push(...i._updateAsTuples());
                } else updates.push([
                    ROOT,
                    i
                ]);
                return updates;
            } else if (input != null) return [
                [
                    ROOT,
                    input
                ]
            ];
            return null;
        }
        const nodeKey = key;
        function _getUpdates(input) {
            if (!input) return null;
            else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])(input)) {
                if (input.graph === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"].PARENT) return null;
                return input._updateAsTuples().filter(([k])=>outputKeys.includes(k));
            } else if (Array.isArray(input) && input.length > 0 && input.some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])) {
                const updates = [];
                for (const item of input)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])(item)) {
                    if (item.graph === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"].PARENT) continue;
                    updates.push(...item._updateAsTuples().filter(([k])=>outputKeys.includes(k)));
                } else {
                    const itemUpdates = _getUpdates(item);
                    if (itemUpdates) updates.push(...itemUpdates ?? []);
                }
                return updates;
            } else if (typeof input === "object" && !Array.isArray(input)) return Object.entries(input).filter(([k])=>outputKeys.includes(k));
            else {
                const typeofInput = Array.isArray(input) ? "array" : typeof input;
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidUpdateError"](`Expected node "${nodeKey.toString()}" to return an object or an array containing at least one Command object, received ${typeofInput}`, {
                    lc_error_code: "INVALID_GRAPH_NODE_RETURN_VALUE"
                });
            }
        }
        const stateWriteEntries = [
            {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PASSTHROUGH"],
                mapper: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableCallable"]({
                    func: outputKeys.length && outputKeys[0] === ROOT ? _getRoot : _getUpdates,
                    trace: false,
                    recurse: false
                })
            }
        ];
        if (key === "__start__") this.nodes[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$read$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PregelNode"]({
            tags: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
            ],
            triggers: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"]
            ],
            channels: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"]
            ],
            writers: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"](stateWriteEntries, [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
                ])
            ]
        });
        else {
            const inputDefinition = node?.input ?? this.builder._schemaDefinition;
            const inputValues = Object.fromEntries(Object.keys(this.builder._schemaDefinitions.get(inputDefinition)).map((k)=>[
                    k,
                    k
                ]));
            const isSingleInput = Object.keys(inputValues).length === 1 && ROOT in inputValues;
            const branchChannel = `branch:to:${key}`;
            this.channels[branchChannel] = node?.defer ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LastValueAfterFinish"]() : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$ephemeral_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EphemeralValue"](false);
            this.nodes[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$read$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PregelNode"]({
                triggers: [
                    branchChannel
                ],
                channels: isSingleInput ? Object.keys(inputValues) : inputValues,
                writers: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"](stateWriteEntries, [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
                    ])
                ],
                mapper: isSingleInput ? void 0 : (input)=>{
                    return Object.fromEntries(Object.entries(input).filter(([k])=>k in inputValues));
                },
                bound: node?.runnable,
                metadata: node?.metadata,
                retryPolicy: node?.retryPolicy,
                cachePolicy: node?.cachePolicy,
                subgraphs: node?.subgraphs,
                ends: node?.ends
            });
        }
    }
    attachEdge(starts, end) {
        if (end === "__end__") return;
        if (typeof starts === "string") this.nodes[starts].writers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"]([
            {
                channel: `branch:to:${end}`,
                value: null
            }
        ], [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
        ]));
        else if (Array.isArray(starts)) {
            const channelName = `join:${starts.join("+")}:${end}`;
            this.channels[channelName] = this.builder.nodes[end].defer ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$named_barrier_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NamedBarrierValueAfterFinish"](new Set(starts)) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$named_barrier_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NamedBarrierValue"](new Set(starts));
            this.nodes[end].triggers.push(channelName);
            for (const start of starts)this.nodes[start].writers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"]([
                {
                    channel: channelName,
                    value: start
                }
            ], [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
            ]));
        }
    }
    attachBranch(start, _, branch, options = {
        withReader: true
    }) {
        const branchWriter = async (packets, config)=>{
            const filteredPackets = packets.filter((p)=>p !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]);
            if (!filteredPackets.length) return;
            const writes = filteredPackets.map((p)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSend"])(p)) return p;
                return {
                    channel: p === "__end__" ? p : `branch:to:${p}`,
                    value: start
                };
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"].doWrite({
                ...config,
                tags: (config.tags ?? []).concat([
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
                ])
            }, writes);
        };
        this.nodes[start].writers.push(branch.run(branchWriter, options.withReader ? (config)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$read$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelRead"].doRead(config, this.streamChannels ?? this.outputChannels, true) : void 0));
    }
    async _validateInput(input) {
        if (input == null) return input;
        const inputDef = this.builder._inputRuntimeDefinition;
        const schemaDef = this.builder._schemaRuntimeDefinition;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StateSchema"].isInstance(inputDef)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])(input)) {
                const parsedInput = input;
                if (input.update) parsedInput.update = await inputDef.validateInput(Array.isArray(input.update) ? Object.fromEntries(input.update) : input.update);
                return parsedInput;
            }
            return await inputDef.validateInput(input);
        }
        if (inputDef === PartialStateSchema && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StateSchema"].isInstance(schemaDef)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])(input)) {
                const parsedInput = input;
                if (input.update) parsedInput.update = await schemaDef.validateInput(Array.isArray(input.update) ? Object.fromEntries(input.update) : input.update);
                return parsedInput;
            }
            return await schemaDef.validateInput(input);
        }
        const schema = (()=>{
            const apply = (schema)=>{
                if (schema == null) return void 0;
                return this._metaRegistry.getExtendedChannelSchemas(schema, {
                    withReducerSchema: true
                });
            };
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteropZodObject"])(inputDef)) return apply(inputDef);
            if (inputDef === PartialStateSchema) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteropZodObject"])(schemaDef)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interopZodObjectPartial"])(apply(schemaDef));
                return;
            }
        })();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])(input)) {
            const parsedInput = input;
            if (input.update && schema != null) parsedInput.update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interopParse"])(schema, input.update);
            return parsedInput;
        }
        if (schema != null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interopParse"])(schema, input);
        return input;
    }
    isInterrupted(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInterrupted"])(input);
    }
    async _validateContext(config) {
        const configSchema = this.builder._configRuntimeSchema;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteropZodObject"])(configSchema)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interopParse"])(configSchema, config);
        return config;
    }
};
/**
* Check if value is a legacy StateGraphArgs with channels.
* @internal
* @deprecated Use StateGraphInit instead
*/ function isStateGraphArgs(obj) {
    return typeof obj === "object" && obj !== null && obj.channels !== void 0;
}
function _controlBranch(value) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSend"])(value)) return [
        value
    ];
    const commands = [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"])(value)) commands.push(value);
    else if (Array.isArray(value)) commands.push(...value.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isCommand"]));
    const destinations = [];
    for (const command of commands){
        if (command.graph === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"].PARENT) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ParentCommand"](command);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_isSend"])(command.goto)) destinations.push(command.goto);
        else if (typeof command.goto === "string") destinations.push(command.goto);
        else if (Array.isArray(command.goto)) destinations.push(...command.goto);
    }
    return destinations;
}
function _getControlBranch() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Branch"]({
        path: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableCallable"]({
            func: _controlBranch,
            tags: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
            ],
            trace: false,
            recurse: false,
            name: "<control_branch>"
        })
    });
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/message.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageGraph",
    ()=>MessageGraph,
    "pushMessage",
    ()=>pushMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$messages_reducer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/messages_reducer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/state.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/messages/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/messages/utils.js [app-route] (ecmascript)");
;
;
;
;
//#region src/graph/message.ts
/** @ignore */ var MessageGraph = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StateGraph"] {
    constructor(){
        super({
            channels: {
                __root__: {
                    reducer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$messages_reducer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["messagesStateReducer"],
                    default: ()=>[]
                }
            }
        });
    }
};
/**
* Manually push a message to a message stream.
*
* This is useful when you need to push a manually created message before the node
* has finished executing.
*
* When a message is pushed, it will be automatically persisted to the state after the node has finished executing.
* To disable persisting, set `options.stateKey` to `null`.
*
* @param message The message to push. The message must have an ID set, otherwise an error will be thrown.
* @param options RunnableConfig / Runtime coming from node context.
*/ function pushMessage(message, options) {
    const { stateKey: userStateKey, ...userConfig } = options ?? {};
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureLangGraphConfig"])(userConfig);
    let stateKey = userStateKey ?? "messages";
    if (userStateKey === null) stateKey = void 0;
    const validMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceMessageLikeToMessage"])(message);
    if (!validMessage.id) throw new Error("Message ID is required.");
    const messagesHandler = (()=>{
        if (Array.isArray(config.callbacks)) return config.callbacks;
        if (typeof config.callbacks !== "undefined") return config.callbacks.handlers;
        return [];
    })().find((cb)=>"name" in cb && cb.name === "StreamMessagesHandler");
    if (messagesHandler) {
        const metadata = config.metadata ?? {};
        const namespace = (metadata.langgraph_checkpoint_ns ?? "").split("|");
        messagesHandler._emit([
            namespace,
            metadata
        ], validMessage, void 0, false);
    }
    if (stateKey) config.configurable?.__pregel_send?.([
        [
            stateKey,
            validMessage
        ]
    ]);
    return validMessage;
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/func/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "entrypoint",
    ()=>entrypoint,
    "getPreviousState",
    ()=>getPreviousState,
    "task",
    ()=>task
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/last_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/write.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$read$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/read.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$call$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/call.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$ephemeral_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/ephemeral_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
//#region src/func/index.ts
/**
* Define a LangGraph task using the `task` function.
*
* Tasks can only be called from within an {@link entrypoint} or from within a StateGraph.
* A task can be called like a regular function with the following differences:
*
* - When a checkpointer is enabled, the function inputs and outputs must be serializable.
* - The wrapped function can only be called from within an entrypoint or StateGraph.
* - Calling the function produces a promise. This makes it easy to parallelize tasks.
*
* @typeParam ArgsT - The type of arguments the task function accepts
* @typeParam OutputT - The type of value the task function returns
* @param optionsOrName - Either an {@link TaskOptions} object, or a string for the name of the task
* @param func - The function that executes this task
* @returns A proxy function that accepts the same arguments as the original and always returns the result as a Promise
*
* @example basic example
* ```typescript
* const addOne = task("add", async (a: number) => a + 1);
*
* const workflow = entrypoint("example", async (numbers: number[]) => {
*   const promises = numbers.map(n => addOne(n));
*   const results = await Promise.all(promises);
*   return results;
* });
*
* // Call the entrypoint
* await workflow.invoke([1, 2, 3]); // Returns [2, 3, 4]
* ```
*
* @example using a retry policy
* ```typescript
* const addOne = task({
*     name: "add",
*     retry: { maxAttempts: 3 }
*   },
*   async (a: number) => a + 1
* );
*
* const workflow = entrypoint("example", async (numbers: number[]) => {
*   const promises = numbers.map(n => addOne(n));
*   const results = await Promise.all(promises);
*   return results;
* });
* ```
* @category Functional API
*/ function task(optionsOrName, func) {
    const options = typeof optionsOrName === "string" ? {
        name: optionsOrName,
        retry: void 0,
        cachePolicy: void 0
    } : optionsOrName;
    const { name, retry } = options;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncGeneratorFunction"])(func) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGeneratorFunction"])(func)) throw new Error("Generators are disallowed as tasks. For streaming responses, use config.write.");
    const cachePolicy = options.cachePolicy ?? ("cache" in options ? options.cache : void 0);
    let cache;
    if (typeof cachePolicy === "boolean") cache = cachePolicy ? {} : void 0;
    else cache = cachePolicy;
    return (...args)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$call$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["call"])({
            func,
            name,
            retry,
            cache
        }, ...args);
    };
}
/**
* Define a LangGraph workflow using the `entrypoint` function.
*
* ### Function signature
*
* The wrapped function must accept at most **two parameters**. The first parameter
* is the input to the function. The second (optional) parameter is a
* {@link LangGraphRunnableConfig} object. If you wish to pass multiple parameters to
* the function, you can pass them as an object.
*
* ### Helper functions
*
* #### Streaming
* To write data to the "custom" stream, use the {@link getWriter} function, or the
* {@link LangGraphRunnableConfig.writer} property.
*
* #### State management
* The {@link getPreviousState} function can be used to access the previous state
* that was returned from the last invocation of the entrypoint on the same thread id.
*
* If you wish to save state other than the return value, you can use the
* {@link entrypoint.final} function.
*
* @typeParam InputT - The type of input the entrypoint accepts
* @typeParam OutputT - The type of output the entrypoint produces
* @param optionsOrName - Either an {@link EntrypointOptions} object, or a string for the name of the entrypoint
* @param func - The function that executes this entrypoint
* @returns A {@link Pregel} instance that can be run to execute the workflow
*
* @example Using entrypoint and tasks
* ```typescript
* import { task, entrypoint } from "@langchain/langgraph";
* import { MemorySaver } from "@langchain/langgraph-checkpoint";
* import { interrupt, Command } from "@langchain/langgraph";
*
* const composeEssay = task("compose", async (topic: string) => {
*   await new Promise(r => setTimeout(r, 1000)); // Simulate slow operation
*   return `An essay about ${topic}`;
* });
*
* const reviewWorkflow = entrypoint({
*   name: "review",
*   checkpointer: new MemorySaver()
* }, async (topic: string) => {
*   const essay = await composeEssay(topic);
*   const humanReview = await interrupt({
*     question: "Please provide a review",
*     essay
*   });
*   return {
*     essay,
*     review: humanReview
*   };
* });
*
* // Example configuration for the workflow
* const config = {
*   configurable: {
*     thread_id: "some_thread"
*   }
* };
*
* // Topic for the essay
* const topic = "cats";
*
* // Stream the workflow to generate the essay and await human review
* for await (const result of reviewWorkflow.stream(topic, config)) {
*   console.log(result);
* }
*
* // Example human review provided after the interrupt
* const humanReview = "This essay is great.";
*
* // Resume the workflow with the provided human review
* for await (const result of reviewWorkflow.stream(new Command({ resume: humanReview }), config)) {
*   console.log(result);
* }
* ```
*
* @example Accessing the previous return value
* ```typescript
* import { entrypoint, getPreviousState } from "@langchain/langgraph";
* import { MemorySaver } from "@langchain/langgraph-checkpoint";
*
* const accumulator = entrypoint({
*   name: "accumulator",
*   checkpointer: new MemorySaver()
* }, async (input: string) => {
*   const previous = getPreviousState<number>();
*   return previous !== undefined ? `${previous } ${input}` : input;
* });
*
* const config = {
*   configurable: {
*     thread_id: "some_thread"
*   }
* };
* await accumulator.invoke("hello", config); // returns "hello"
* await accumulator.invoke("world", config); // returns "hello world"
* ```
*
* @example Using entrypoint.final to save a value
* ```typescript
* import { entrypoint, getPreviousState } from "@langchain/langgraph";
* import { MemorySaver } from "@langchain/langgraph-checkpoint";
*
* const myWorkflow = entrypoint({
*   name: "accumulator",
*   checkpointer: new MemorySaver()
* }, async (num: number) => {
*   const previous = getPreviousState<number>();
*
*   // This will return the previous value to the caller, saving
*   // 2 * num to the checkpoint, which will be used in the next invocation
*   // for the `previous` parameter.
*   return entrypoint.final({
*     value: previous ?? 0,
*     save: 2 * num
*   });
* });
*
* const config = {
*   configurable: {
*     thread_id: "some_thread"
*   }
* };
*
* await myWorkflow.invoke(3, config); // 0 (previous was undefined)
* await myWorkflow.invoke(1, config); // 6 (previous was 3 * 2 from the previous invocation)
* ```
* @category Functional API
*/ const entrypoint = function entrypoint(optionsOrName, func) {
    const { name, checkpointer, store, cache } = typeof optionsOrName === "string" ? {
        name: optionsOrName,
        checkpointer: void 0,
        store: void 0
    } : optionsOrName;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncGeneratorFunction"])(func) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGeneratorFunction"])(func)) throw new Error("Generators are disallowed as entrypoints. For streaming responses, use config.write.");
    const streamMode = "updates";
    const bound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$call$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRunnableForEntrypoint"])(name, func);
    function isEntrypointFinal(value) {
        return typeof value === "object" && value !== null && "__lg_type" in value && value.__lg_type === "__pregel_final";
    }
    const pluckReturnValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableCallable"]({
        name: "pluckReturnValue",
        func: (value)=>{
            return isEntrypointFinal(value) ? value.value : value;
        }
    });
    const pluckSaveValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RunnableCallable"]({
        name: "pluckSaveValue",
        func: (value)=>{
            return isEntrypointFinal(value) ? value.save : value;
        }
    });
    const entrypointNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$read$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PregelNode"]({
        bound,
        triggers: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"]
        ],
        channels: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"]
        ],
        writers: [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChannelWrite"]([
                {
                    channel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"],
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PASSTHROUGH"],
                    mapper: pluckReturnValue
                },
                {
                    channel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PREVIOUS"],
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$write$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PASSTHROUGH"],
                    mapper: pluckSaveValue
                }
            ], [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TAG_HIDDEN"]
            ])
        ]
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Pregel"]({
        name,
        checkpointer,
        nodes: {
            [name]: entrypointNode
        },
        channels: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"]]: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$ephemeral_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EphemeralValue"](),
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"]]: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LastValue"](),
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PREVIOUS"]]: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$last_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LastValue"]()
        },
        inputChannels: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["START"],
        outputChannels: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"],
        streamChannels: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["END"],
        streamMode,
        store,
        cache
    });
};
entrypoint.final = function final({ value, save }) {
    return {
        value,
        save,
        __lg_type: "__pregel_final"
    };
};
/**
* A helper utility function for use with the functional API that returns the previous
* state from the checkpoint from the last invocation of the current thread.
*
* This function allows workflows to access state that was saved in previous runs
* using {@link entrypoint.final}.
*
* @typeParam StateT - The type of the state that was previously saved
* @returns The previous saved state from the last invocation of the current thread
*
* @example
* ```typescript
* const previousState = getPreviousState<{ counter: number }>();
* const newCount = (previousState?.counter ?? 0) + 1;
* ```
* @category Functional API
*/ function getPreviousState() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].getRunnableConfig().configurable?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONFIG_KEY_PREVIOUS_STATE"]];
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/messages_annotation.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessagesAnnotation",
    ()=>MessagesAnnotation,
    "MessagesZodMeta",
    ()=>MessagesZodMeta,
    "MessagesZodState",
    ()=>MessagesZodState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/annotation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$messages_reducer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/messages_reducer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$zod$2f$meta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/zod/meta.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
;
;
;
//#region src/graph/messages_annotation.ts
/**
* Prebuilt state annotation that combines returned messages.
* Can handle standard messages and special modifiers like {@link RemoveMessage}
* instances.
*
* Specifically, importing and using the prebuilt MessagesAnnotation like this:
*
* @example
* ```ts
* import { MessagesAnnotation, StateGraph } from "@langchain/langgraph";
*
* const graph = new StateGraph(MessagesAnnotation)
*   .addNode(...)
*   ...
* ```
*
* Is equivalent to initializing your state manually like this:
*
* @example
* ```ts
* import { BaseMessage } from "@langchain/core/messages";
* import { Annotation, StateGraph, messagesStateReducer } from "@langchain/langgraph";
*
* export const StateAnnotation = Annotation.Root({
*   messages: Annotation<BaseMessage[]>({
*     reducer: messagesStateReducer,
*     default: () => [],
*   }),
* });
*
* const graph = new StateGraph(StateAnnotation)
*   .addNode(...)
*   ...
* ```
*/ const MessagesAnnotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Annotation"].Root({
    messages: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Annotation"])({
        reducer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$messages_reducer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["messagesStateReducer"],
        default: ()=>[]
    })
});
/**
* Prebuilt schema meta for Zod state definition.
*
* @example
* ```ts
* import { z } from "zod/v4-mini";
* import { MessagesZodState, StateGraph } from "@langchain/langgraph";
*
* const AgentState = z.object({
*   messages: z.custom<BaseMessage[]>().register(registry, MessagesZodMeta),
* });
* ```
*/ const MessagesZodMeta = {
    reducer: {
        fn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$messages_reducer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["messagesStateReducer"]
    },
    jsonSchemaExtra: {
        langgraph_type: "messages"
    },
    default: ()=>[]
};
/**
* Prebuilt state object that uses Zod to combine returned messages.
* This utility is synonymous with the `MessagesAnnotation` annotation,
* but uses Zod as the way to express messages state.
*
* You can use import and use this prebuilt schema like this:
*
* @example
* ```ts
* import { MessagesZodState, StateGraph } from "@langchain/langgraph";
*
* const graph = new StateGraph(MessagesZodState)
*   .addNode(...)
*   ...
* ```
*
* Which is equivalent to initializing the schema object manually like this:
*
* @example
* ```ts
* import { z } from "zod";
* import type { BaseMessage, BaseMessageLike } from "@langchain/core/messages";
* import { StateGraph, messagesStateReducer } from "@langchain/langgraph";
* import "@langchain/langgraph/zod";
*
* const AgentState = z.object({
*   messages: z
*     .custom<BaseMessage[]>()
*     .default(() => [])
*     .langgraph.reducer(
*        messagesStateReducer,
*        z.custom<BaseMessageLike | BaseMessageLike[]>()
*     ),
* });
* const graph = new StateGraph(AgentState)
*   .addNode(...)
*   ...
* ```
*/ const MessagesZodState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    messages: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$zod$2f$meta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withLangGraph"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom(), MessagesZodMeta)
});
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/writer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "writer",
    ()=>writer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+core@1.1.41/node_modules/@langchain/core/dist/singletons/async_local_storage/index.js [app-route] (ecmascript)");
;
//#region src/writer.ts
function writer(chunk) {
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$singletons$2f$async_local_storage$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AsyncLocalStorageProviderSingleton"].getRunnableConfig();
    if (!config) throw new Error("Called interrupt() outside the context of a graph.");
    const conf = config.configurable;
    if (!conf) throw new Error("No configurable found in config");
    return conf.writer?.(chunk);
}
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/annotation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/graph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$messages_reducer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/messages_reducer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/state.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$message$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/message.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/web.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$binop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/binop.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/annotation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$interrupt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/interrupt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/graph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/adapter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$untracked_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/untracked_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$reduced$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/values/reduced.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$untracked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/values/untracked.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/schema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$messages_reducer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/messages_reducer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$prebuilt$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/prebuilt/messages.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/state.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$message$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/message.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$func$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/func/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$messages_annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/messages_annotation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$writer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/writer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$store$2f$batch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/store/batch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$store$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/store/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$store$2f$memory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/store/memory.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$memory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/memory.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$setup$2f$async_local_storage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/setup/async_local_storage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$binop$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/binop.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/annotation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$pregel$2f$utils$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/pregel/utils/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$interrupt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/interrupt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$graph$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/graph.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$adapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/adapter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$channels$2f$untracked_value$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/channels/untracked_value.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$reduced$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/values/reduced.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$values$2f$untracked$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/values/untracked.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/schema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$messages_reducer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/messages_reducer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$state$2f$prebuilt$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/state/prebuilt/messages.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/state.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$message$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/message.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$func$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/func/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$graph$2f$messages_annotation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/graph/messages_annotation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$writer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/writer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$web$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph@1.2.9_@langchain+core@1.1.41_react-dom@19.2.4_react@19.2.4__react@_dd04954a486224ec8cf73bff962f4bf6/node_modules/@langchain/langgraph/dist/web.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$store$2f$batch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/store/batch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$store$2f$base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/store/base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$store$2f$memory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/store/memory.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$2d$checkpoint$40$1$2e$0$2e$1_$40$langchain$2b$core$40$1$2e$1$2e$41$2f$node_modules$2f40$langchain$2f$langgraph$2d$checkpoint$2f$dist$2f$memory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@langchain+langgraph-checkpoint@1.0.1_@langchain+core@1.1.41/node_modules/@langchain/langgraph-checkpoint/dist/memory.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//#region src/index.ts
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$langchain$2b$langgraph$40$1$2e$2$2e$9_$40$langchain$2b$core$40$1$2e$1$2e$41_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$_dd04954a486224ec8cf73bff962f4bf6$2f$node_modules$2f40$langchain$2f$langgraph$2f$dist$2f$setup$2f$async_local_storage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initializeAsyncLocalStorageSingleton"])();
;
}),
];

//# sourceMappingURL=0t39_%40langchain_langgraph_dist_0ppe_jg._.js.map