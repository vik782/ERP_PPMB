import { INestApplication } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
export declare class TrpcRouter {
    private readonly trpc;
    constructor(trpc: TrpcService);
    appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>, {
        getUsers: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                name: string;
            };
            _input_out: {
                name: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            greeting: string;
        }>;
    }>;
    applyMiddleware(app: INestApplication): Promise<void>;
}
export type AppRouter = TrpcRouter[`appRouter`];
