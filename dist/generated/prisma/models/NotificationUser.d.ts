import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model NotificationUser
 *
 */
export type NotificationUserModel = runtime.Types.Result.DefaultSelection<Prisma.$NotificationUserPayload>;
export type AggregateNotificationUser = {
    _count: NotificationUserCountAggregateOutputType | null;
    _avg: NotificationUserAvgAggregateOutputType | null;
    _sum: NotificationUserSumAggregateOutputType | null;
    _min: NotificationUserMinAggregateOutputType | null;
    _max: NotificationUserMaxAggregateOutputType | null;
};
export type NotificationUserAvgAggregateOutputType = {
    userId: number | null;
    notificationId: number | null;
};
export type NotificationUserSumAggregateOutputType = {
    userId: number | null;
    notificationId: number | null;
};
export type NotificationUserMinAggregateOutputType = {
    userId: number | null;
    notificationId: number | null;
};
export type NotificationUserMaxAggregateOutputType = {
    userId: number | null;
    notificationId: number | null;
};
export type NotificationUserCountAggregateOutputType = {
    userId: number;
    notificationId: number;
    _all: number;
};
export type NotificationUserAvgAggregateInputType = {
    userId?: true;
    notificationId?: true;
};
export type NotificationUserSumAggregateInputType = {
    userId?: true;
    notificationId?: true;
};
export type NotificationUserMinAggregateInputType = {
    userId?: true;
    notificationId?: true;
};
export type NotificationUserMaxAggregateInputType = {
    userId?: true;
    notificationId?: true;
};
export type NotificationUserCountAggregateInputType = {
    userId?: true;
    notificationId?: true;
    _all?: true;
};
export type NotificationUserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationUser to aggregate.
     */
    where?: Prisma.NotificationUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NotificationUsers to fetch.
     */
    orderBy?: Prisma.NotificationUserOrderByWithRelationInput | Prisma.NotificationUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.NotificationUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NotificationUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NotificationUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned NotificationUsers
    **/
    _count?: true | NotificationUserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: NotificationUserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: NotificationUserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: NotificationUserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: NotificationUserMaxAggregateInputType;
};
export type GetNotificationUserAggregateType<T extends NotificationUserAggregateArgs> = {
    [P in keyof T & keyof AggregateNotificationUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotificationUser[P]> : Prisma.GetScalarType<T[P], AggregateNotificationUser[P]>;
};
export type NotificationUserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationUserWhereInput;
    orderBy?: Prisma.NotificationUserOrderByWithAggregationInput | Prisma.NotificationUserOrderByWithAggregationInput[];
    by: Prisma.NotificationUserScalarFieldEnum[] | Prisma.NotificationUserScalarFieldEnum;
    having?: Prisma.NotificationUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationUserCountAggregateInputType | true;
    _avg?: NotificationUserAvgAggregateInputType;
    _sum?: NotificationUserSumAggregateInputType;
    _min?: NotificationUserMinAggregateInputType;
    _max?: NotificationUserMaxAggregateInputType;
};
export type NotificationUserGroupByOutputType = {
    userId: number;
    notificationId: number;
    _count: NotificationUserCountAggregateOutputType | null;
    _avg: NotificationUserAvgAggregateOutputType | null;
    _sum: NotificationUserSumAggregateOutputType | null;
    _min: NotificationUserMinAggregateOutputType | null;
    _max: NotificationUserMaxAggregateOutputType | null;
};
type GetNotificationUserGroupByPayload<T extends NotificationUserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationUserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationUserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationUserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationUserGroupByOutputType[P]>;
}>>;
export type NotificationUserWhereInput = {
    AND?: Prisma.NotificationUserWhereInput | Prisma.NotificationUserWhereInput[];
    OR?: Prisma.NotificationUserWhereInput[];
    NOT?: Prisma.NotificationUserWhereInput | Prisma.NotificationUserWhereInput[];
    userId?: Prisma.IntFilter<"NotificationUser"> | number;
    notificationId?: Prisma.IntFilter<"NotificationUser"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    notification?: Prisma.XOR<Prisma.NotificationScalarRelationFilter, Prisma.NotificationWhereInput>;
};
export type NotificationUserOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    notificationId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    notification?: Prisma.NotificationOrderByWithRelationInput;
};
export type NotificationUserWhereUniqueInput = Prisma.AtLeast<{
    userId_notificationId?: Prisma.NotificationUserUserIdNotificationIdCompoundUniqueInput;
    AND?: Prisma.NotificationUserWhereInput | Prisma.NotificationUserWhereInput[];
    OR?: Prisma.NotificationUserWhereInput[];
    NOT?: Prisma.NotificationUserWhereInput | Prisma.NotificationUserWhereInput[];
    userId?: Prisma.IntFilter<"NotificationUser"> | number;
    notificationId?: Prisma.IntFilter<"NotificationUser"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    notification?: Prisma.XOR<Prisma.NotificationScalarRelationFilter, Prisma.NotificationWhereInput>;
}, "userId_notificationId">;
export type NotificationUserOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    notificationId?: Prisma.SortOrder;
    _count?: Prisma.NotificationUserCountOrderByAggregateInput;
    _avg?: Prisma.NotificationUserAvgOrderByAggregateInput;
    _max?: Prisma.NotificationUserMaxOrderByAggregateInput;
    _min?: Prisma.NotificationUserMinOrderByAggregateInput;
    _sum?: Prisma.NotificationUserSumOrderByAggregateInput;
};
export type NotificationUserScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotificationUserScalarWhereWithAggregatesInput | Prisma.NotificationUserScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotificationUserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotificationUserScalarWhereWithAggregatesInput | Prisma.NotificationUserScalarWhereWithAggregatesInput[];
    userId?: Prisma.IntWithAggregatesFilter<"NotificationUser"> | number;
    notificationId?: Prisma.IntWithAggregatesFilter<"NotificationUser"> | number;
};
export type NotificationUserCreateInput = {
    user: Prisma.UserCreateNestedOneWithoutNotificationsInput;
    notification: Prisma.NotificationCreateNestedOneWithoutUsersInput;
};
export type NotificationUserUncheckedCreateInput = {
    userId: number;
    notificationId: number;
};
export type NotificationUserUpdateInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutNotificationsNestedInput;
    notification?: Prisma.NotificationUpdateOneRequiredWithoutUsersNestedInput;
};
export type NotificationUserUncheckedUpdateInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    notificationId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type NotificationUserCreateManyInput = {
    userId: number;
    notificationId: number;
};
export type NotificationUserUpdateManyMutationInput = {};
export type NotificationUserUncheckedUpdateManyInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    notificationId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type NotificationUserListRelationFilter = {
    every?: Prisma.NotificationUserWhereInput;
    some?: Prisma.NotificationUserWhereInput;
    none?: Prisma.NotificationUserWhereInput;
};
export type NotificationUserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotificationUserUserIdNotificationIdCompoundUniqueInput = {
    userId: number;
    notificationId: number;
};
export type NotificationUserCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    notificationId?: Prisma.SortOrder;
};
export type NotificationUserAvgOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    notificationId?: Prisma.SortOrder;
};
export type NotificationUserMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    notificationId?: Prisma.SortOrder;
};
export type NotificationUserMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    notificationId?: Prisma.SortOrder;
};
export type NotificationUserSumOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    notificationId?: Prisma.SortOrder;
};
export type NotificationUserCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NotificationUserCreateWithoutUserInput, Prisma.NotificationUserUncheckedCreateWithoutUserInput> | Prisma.NotificationUserCreateWithoutUserInput[] | Prisma.NotificationUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationUserCreateOrConnectWithoutUserInput | Prisma.NotificationUserCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.NotificationUserCreateManyUserInputEnvelope;
    connect?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
};
export type NotificationUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.NotificationUserCreateWithoutUserInput, Prisma.NotificationUserUncheckedCreateWithoutUserInput> | Prisma.NotificationUserCreateWithoutUserInput[] | Prisma.NotificationUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationUserCreateOrConnectWithoutUserInput | Prisma.NotificationUserCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.NotificationUserCreateManyUserInputEnvelope;
    connect?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
};
export type NotificationUserUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationUserCreateWithoutUserInput, Prisma.NotificationUserUncheckedCreateWithoutUserInput> | Prisma.NotificationUserCreateWithoutUserInput[] | Prisma.NotificationUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationUserCreateOrConnectWithoutUserInput | Prisma.NotificationUserCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.NotificationUserUpsertWithWhereUniqueWithoutUserInput | Prisma.NotificationUserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.NotificationUserCreateManyUserInputEnvelope;
    set?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    disconnect?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    delete?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    connect?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    update?: Prisma.NotificationUserUpdateWithWhereUniqueWithoutUserInput | Prisma.NotificationUserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.NotificationUserUpdateManyWithWhereWithoutUserInput | Prisma.NotificationUserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.NotificationUserScalarWhereInput | Prisma.NotificationUserScalarWhereInput[];
};
export type NotificationUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationUserCreateWithoutUserInput, Prisma.NotificationUserUncheckedCreateWithoutUserInput> | Prisma.NotificationUserCreateWithoutUserInput[] | Prisma.NotificationUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.NotificationUserCreateOrConnectWithoutUserInput | Prisma.NotificationUserCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.NotificationUserUpsertWithWhereUniqueWithoutUserInput | Prisma.NotificationUserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.NotificationUserCreateManyUserInputEnvelope;
    set?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    disconnect?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    delete?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    connect?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    update?: Prisma.NotificationUserUpdateWithWhereUniqueWithoutUserInput | Prisma.NotificationUserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.NotificationUserUpdateManyWithWhereWithoutUserInput | Prisma.NotificationUserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.NotificationUserScalarWhereInput | Prisma.NotificationUserScalarWhereInput[];
};
export type NotificationUserCreateNestedManyWithoutNotificationInput = {
    create?: Prisma.XOR<Prisma.NotificationUserCreateWithoutNotificationInput, Prisma.NotificationUserUncheckedCreateWithoutNotificationInput> | Prisma.NotificationUserCreateWithoutNotificationInput[] | Prisma.NotificationUserUncheckedCreateWithoutNotificationInput[];
    connectOrCreate?: Prisma.NotificationUserCreateOrConnectWithoutNotificationInput | Prisma.NotificationUserCreateOrConnectWithoutNotificationInput[];
    createMany?: Prisma.NotificationUserCreateManyNotificationInputEnvelope;
    connect?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
};
export type NotificationUserUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: Prisma.XOR<Prisma.NotificationUserCreateWithoutNotificationInput, Prisma.NotificationUserUncheckedCreateWithoutNotificationInput> | Prisma.NotificationUserCreateWithoutNotificationInput[] | Prisma.NotificationUserUncheckedCreateWithoutNotificationInput[];
    connectOrCreate?: Prisma.NotificationUserCreateOrConnectWithoutNotificationInput | Prisma.NotificationUserCreateOrConnectWithoutNotificationInput[];
    createMany?: Prisma.NotificationUserCreateManyNotificationInputEnvelope;
    connect?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
};
export type NotificationUserUpdateManyWithoutNotificationNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationUserCreateWithoutNotificationInput, Prisma.NotificationUserUncheckedCreateWithoutNotificationInput> | Prisma.NotificationUserCreateWithoutNotificationInput[] | Prisma.NotificationUserUncheckedCreateWithoutNotificationInput[];
    connectOrCreate?: Prisma.NotificationUserCreateOrConnectWithoutNotificationInput | Prisma.NotificationUserCreateOrConnectWithoutNotificationInput[];
    upsert?: Prisma.NotificationUserUpsertWithWhereUniqueWithoutNotificationInput | Prisma.NotificationUserUpsertWithWhereUniqueWithoutNotificationInput[];
    createMany?: Prisma.NotificationUserCreateManyNotificationInputEnvelope;
    set?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    disconnect?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    delete?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    connect?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    update?: Prisma.NotificationUserUpdateWithWhereUniqueWithoutNotificationInput | Prisma.NotificationUserUpdateWithWhereUniqueWithoutNotificationInput[];
    updateMany?: Prisma.NotificationUserUpdateManyWithWhereWithoutNotificationInput | Prisma.NotificationUserUpdateManyWithWhereWithoutNotificationInput[];
    deleteMany?: Prisma.NotificationUserScalarWhereInput | Prisma.NotificationUserScalarWhereInput[];
};
export type NotificationUserUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationUserCreateWithoutNotificationInput, Prisma.NotificationUserUncheckedCreateWithoutNotificationInput> | Prisma.NotificationUserCreateWithoutNotificationInput[] | Prisma.NotificationUserUncheckedCreateWithoutNotificationInput[];
    connectOrCreate?: Prisma.NotificationUserCreateOrConnectWithoutNotificationInput | Prisma.NotificationUserCreateOrConnectWithoutNotificationInput[];
    upsert?: Prisma.NotificationUserUpsertWithWhereUniqueWithoutNotificationInput | Prisma.NotificationUserUpsertWithWhereUniqueWithoutNotificationInput[];
    createMany?: Prisma.NotificationUserCreateManyNotificationInputEnvelope;
    set?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    disconnect?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    delete?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    connect?: Prisma.NotificationUserWhereUniqueInput | Prisma.NotificationUserWhereUniqueInput[];
    update?: Prisma.NotificationUserUpdateWithWhereUniqueWithoutNotificationInput | Prisma.NotificationUserUpdateWithWhereUniqueWithoutNotificationInput[];
    updateMany?: Prisma.NotificationUserUpdateManyWithWhereWithoutNotificationInput | Prisma.NotificationUserUpdateManyWithWhereWithoutNotificationInput[];
    deleteMany?: Prisma.NotificationUserScalarWhereInput | Prisma.NotificationUserScalarWhereInput[];
};
export type NotificationUserCreateWithoutUserInput = {
    notification: Prisma.NotificationCreateNestedOneWithoutUsersInput;
};
export type NotificationUserUncheckedCreateWithoutUserInput = {
    notificationId: number;
};
export type NotificationUserCreateOrConnectWithoutUserInput = {
    where: Prisma.NotificationUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationUserCreateWithoutUserInput, Prisma.NotificationUserUncheckedCreateWithoutUserInput>;
};
export type NotificationUserCreateManyUserInputEnvelope = {
    data: Prisma.NotificationUserCreateManyUserInput | Prisma.NotificationUserCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type NotificationUserUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.NotificationUserWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUserUpdateWithoutUserInput, Prisma.NotificationUserUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.NotificationUserCreateWithoutUserInput, Prisma.NotificationUserUncheckedCreateWithoutUserInput>;
};
export type NotificationUserUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.NotificationUserWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUserUpdateWithoutUserInput, Prisma.NotificationUserUncheckedUpdateWithoutUserInput>;
};
export type NotificationUserUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.NotificationUserScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUserUpdateManyMutationInput, Prisma.NotificationUserUncheckedUpdateManyWithoutUserInput>;
};
export type NotificationUserScalarWhereInput = {
    AND?: Prisma.NotificationUserScalarWhereInput | Prisma.NotificationUserScalarWhereInput[];
    OR?: Prisma.NotificationUserScalarWhereInput[];
    NOT?: Prisma.NotificationUserScalarWhereInput | Prisma.NotificationUserScalarWhereInput[];
    userId?: Prisma.IntFilter<"NotificationUser"> | number;
    notificationId?: Prisma.IntFilter<"NotificationUser"> | number;
};
export type NotificationUserCreateWithoutNotificationInput = {
    user: Prisma.UserCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUserUncheckedCreateWithoutNotificationInput = {
    userId: number;
};
export type NotificationUserCreateOrConnectWithoutNotificationInput = {
    where: Prisma.NotificationUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationUserCreateWithoutNotificationInput, Prisma.NotificationUserUncheckedCreateWithoutNotificationInput>;
};
export type NotificationUserCreateManyNotificationInputEnvelope = {
    data: Prisma.NotificationUserCreateManyNotificationInput | Prisma.NotificationUserCreateManyNotificationInput[];
    skipDuplicates?: boolean;
};
export type NotificationUserUpsertWithWhereUniqueWithoutNotificationInput = {
    where: Prisma.NotificationUserWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUserUpdateWithoutNotificationInput, Prisma.NotificationUserUncheckedUpdateWithoutNotificationInput>;
    create: Prisma.XOR<Prisma.NotificationUserCreateWithoutNotificationInput, Prisma.NotificationUserUncheckedCreateWithoutNotificationInput>;
};
export type NotificationUserUpdateWithWhereUniqueWithoutNotificationInput = {
    where: Prisma.NotificationUserWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUserUpdateWithoutNotificationInput, Prisma.NotificationUserUncheckedUpdateWithoutNotificationInput>;
};
export type NotificationUserUpdateManyWithWhereWithoutNotificationInput = {
    where: Prisma.NotificationUserScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUserUpdateManyMutationInput, Prisma.NotificationUserUncheckedUpdateManyWithoutNotificationInput>;
};
export type NotificationUserCreateManyUserInput = {
    notificationId: number;
};
export type NotificationUserUpdateWithoutUserInput = {
    notification?: Prisma.NotificationUpdateOneRequiredWithoutUsersNestedInput;
};
export type NotificationUserUncheckedUpdateWithoutUserInput = {
    notificationId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type NotificationUserUncheckedUpdateManyWithoutUserInput = {
    notificationId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type NotificationUserCreateManyNotificationInput = {
    userId: number;
};
export type NotificationUserUpdateWithoutNotificationInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutNotificationsNestedInput;
};
export type NotificationUserUncheckedUpdateWithoutNotificationInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type NotificationUserUncheckedUpdateManyWithoutNotificationInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type NotificationUserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    notificationId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    notification?: boolean | Prisma.NotificationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationUser"]>;
export type NotificationUserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    notificationId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    notification?: boolean | Prisma.NotificationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationUser"]>;
export type NotificationUserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    notificationId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    notification?: boolean | Prisma.NotificationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationUser"]>;
export type NotificationUserSelectScalar = {
    userId?: boolean;
    notificationId?: boolean;
};
export type NotificationUserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "notificationId", ExtArgs["result"]["notificationUser"]>;
export type NotificationUserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    notification?: boolean | Prisma.NotificationDefaultArgs<ExtArgs>;
};
export type NotificationUserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    notification?: boolean | Prisma.NotificationDefaultArgs<ExtArgs>;
};
export type NotificationUserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    notification?: boolean | Prisma.NotificationDefaultArgs<ExtArgs>;
};
export type $NotificationUserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NotificationUser";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        notification: Prisma.$NotificationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: number;
        notificationId: number;
    }, ExtArgs["result"]["notificationUser"]>;
    composites: {};
};
export type NotificationUserGetPayload<S extends boolean | null | undefined | NotificationUserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotificationUserPayload, S>;
export type NotificationUserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotificationUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationUserCountAggregateInputType | true;
};
export interface NotificationUserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NotificationUser'];
        meta: {
            name: 'NotificationUser';
        };
    };
    /**
     * Find zero or one NotificationUser that matches the filter.
     * @param {NotificationUserFindUniqueArgs} args - Arguments to find a NotificationUser
     * @example
     * // Get one NotificationUser
     * const notificationUser = await prisma.notificationUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationUserFindUniqueArgs>(args: Prisma.SelectSubset<T, NotificationUserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotificationUserClient<runtime.Types.Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one NotificationUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationUserFindUniqueOrThrowArgs} args - Arguments to find a NotificationUser
     * @example
     * // Get one NotificationUser
     * const notificationUser = await prisma.notificationUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationUserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotificationUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationUserClient<runtime.Types.Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first NotificationUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserFindFirstArgs} args - Arguments to find a NotificationUser
     * @example
     * // Get one NotificationUser
     * const notificationUser = await prisma.notificationUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationUserFindFirstArgs>(args?: Prisma.SelectSubset<T, NotificationUserFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotificationUserClient<runtime.Types.Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first NotificationUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserFindFirstOrThrowArgs} args - Arguments to find a NotificationUser
     * @example
     * // Get one NotificationUser
     * const notificationUser = await prisma.notificationUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationUserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotificationUserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationUserClient<runtime.Types.Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more NotificationUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationUsers
     * const notificationUsers = await prisma.notificationUser.findMany()
     *
     * // Get first 10 NotificationUsers
     * const notificationUsers = await prisma.notificationUser.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const notificationUserWithUserIdOnly = await prisma.notificationUser.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends NotificationUserFindManyArgs>(args?: Prisma.SelectSubset<T, NotificationUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a NotificationUser.
     * @param {NotificationUserCreateArgs} args - Arguments to create a NotificationUser.
     * @example
     * // Create one NotificationUser
     * const NotificationUser = await prisma.notificationUser.create({
     *   data: {
     *     // ... data to create a NotificationUser
     *   }
     * })
     *
     */
    create<T extends NotificationUserCreateArgs>(args: Prisma.SelectSubset<T, NotificationUserCreateArgs<ExtArgs>>): Prisma.Prisma__NotificationUserClient<runtime.Types.Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many NotificationUsers.
     * @param {NotificationUserCreateManyArgs} args - Arguments to create many NotificationUsers.
     * @example
     * // Create many NotificationUsers
     * const notificationUser = await prisma.notificationUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NotificationUserCreateManyArgs>(args?: Prisma.SelectSubset<T, NotificationUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many NotificationUsers and returns the data saved in the database.
     * @param {NotificationUserCreateManyAndReturnArgs} args - Arguments to create many NotificationUsers.
     * @example
     * // Create many NotificationUsers
     * const notificationUser = await prisma.notificationUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many NotificationUsers and only return the `userId`
     * const notificationUserWithUserIdOnly = await prisma.notificationUser.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NotificationUserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotificationUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a NotificationUser.
     * @param {NotificationUserDeleteArgs} args - Arguments to delete one NotificationUser.
     * @example
     * // Delete one NotificationUser
     * const NotificationUser = await prisma.notificationUser.delete({
     *   where: {
     *     // ... filter to delete one NotificationUser
     *   }
     * })
     *
     */
    delete<T extends NotificationUserDeleteArgs>(args: Prisma.SelectSubset<T, NotificationUserDeleteArgs<ExtArgs>>): Prisma.Prisma__NotificationUserClient<runtime.Types.Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one NotificationUser.
     * @param {NotificationUserUpdateArgs} args - Arguments to update one NotificationUser.
     * @example
     * // Update one NotificationUser
     * const notificationUser = await prisma.notificationUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NotificationUserUpdateArgs>(args: Prisma.SelectSubset<T, NotificationUserUpdateArgs<ExtArgs>>): Prisma.Prisma__NotificationUserClient<runtime.Types.Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more NotificationUsers.
     * @param {NotificationUserDeleteManyArgs} args - Arguments to filter NotificationUsers to delete.
     * @example
     * // Delete a few NotificationUsers
     * const { count } = await prisma.notificationUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NotificationUserDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotificationUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more NotificationUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationUsers
     * const notificationUser = await prisma.notificationUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NotificationUserUpdateManyArgs>(args: Prisma.SelectSubset<T, NotificationUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more NotificationUsers and returns the data updated in the database.
     * @param {NotificationUserUpdateManyAndReturnArgs} args - Arguments to update many NotificationUsers.
     * @example
     * // Update many NotificationUsers
     * const notificationUser = await prisma.notificationUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more NotificationUsers and only return the `userId`
     * const notificationUserWithUserIdOnly = await prisma.notificationUser.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends NotificationUserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotificationUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one NotificationUser.
     * @param {NotificationUserUpsertArgs} args - Arguments to update or create a NotificationUser.
     * @example
     * // Update or create a NotificationUser
     * const notificationUser = await prisma.notificationUser.upsert({
     *   create: {
     *     // ... data to create a NotificationUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationUser we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUserUpsertArgs>(args: Prisma.SelectSubset<T, NotificationUserUpsertArgs<ExtArgs>>): Prisma.Prisma__NotificationUserClient<runtime.Types.Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of NotificationUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserCountArgs} args - Arguments to filter NotificationUsers to count.
     * @example
     * // Count the number of NotificationUsers
     * const count = await prisma.notificationUser.count({
     *   where: {
     *     // ... the filter for the NotificationUsers we want to count
     *   }
     * })
    **/
    count<T extends NotificationUserCountArgs>(args?: Prisma.Subset<T, NotificationUserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationUserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a NotificationUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationUserAggregateArgs>(args: Prisma.Subset<T, NotificationUserAggregateArgs>): Prisma.PrismaPromise<GetNotificationUserAggregateType<T>>;
    /**
     * Group by NotificationUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends NotificationUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotificationUserGroupByArgs['orderBy'];
    } : {
        orderBy?: NotificationUserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotificationUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the NotificationUser model
     */
    readonly fields: NotificationUserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for NotificationUser.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__NotificationUserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    notification<T extends Prisma.NotificationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.NotificationDefaultArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the NotificationUser model
 */
export interface NotificationUserFieldRefs {
    readonly userId: Prisma.FieldRef<"NotificationUser", 'Int'>;
    readonly notificationId: Prisma.FieldRef<"NotificationUser", 'Int'>;
}
/**
 * NotificationUser findUnique
 */
export type NotificationUserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: Prisma.NotificationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: Prisma.NotificationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationUserInclude<ExtArgs> | null;
    /**
     * Filter, which NotificationUser to fetch.
     */
    where: Prisma.NotificationUserWhereUniqueInput;
};
/**
 * NotificationUser findUniqueOrThrow
 */
export type NotificationUserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: Prisma.NotificationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: Prisma.NotificationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationUserInclude<ExtArgs> | null;
    /**
     * Filter, which NotificationUser to fetch.
     */
    where: Prisma.NotificationUserWhereUniqueInput;
};
/**
 * NotificationUser findFirst
 */
export type NotificationUserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: Prisma.NotificationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: Prisma.NotificationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationUserInclude<ExtArgs> | null;
    /**
     * Filter, which NotificationUser to fetch.
     */
    where?: Prisma.NotificationUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NotificationUsers to fetch.
     */
    orderBy?: Prisma.NotificationUserOrderByWithRelationInput | Prisma.NotificationUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NotificationUsers.
     */
    cursor?: Prisma.NotificationUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NotificationUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NotificationUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NotificationUsers.
     */
    distinct?: Prisma.NotificationUserScalarFieldEnum | Prisma.NotificationUserScalarFieldEnum[];
};
/**
 * NotificationUser findFirstOrThrow
 */
export type NotificationUserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: Prisma.NotificationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: Prisma.NotificationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationUserInclude<ExtArgs> | null;
    /**
     * Filter, which NotificationUser to fetch.
     */
    where?: Prisma.NotificationUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NotificationUsers to fetch.
     */
    orderBy?: Prisma.NotificationUserOrderByWithRelationInput | Prisma.NotificationUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NotificationUsers.
     */
    cursor?: Prisma.NotificationUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NotificationUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NotificationUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NotificationUsers.
     */
    distinct?: Prisma.NotificationUserScalarFieldEnum | Prisma.NotificationUserScalarFieldEnum[];
};
/**
 * NotificationUser findMany
 */
export type NotificationUserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: Prisma.NotificationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: Prisma.NotificationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationUserInclude<ExtArgs> | null;
    /**
     * Filter, which NotificationUsers to fetch.
     */
    where?: Prisma.NotificationUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NotificationUsers to fetch.
     */
    orderBy?: Prisma.NotificationUserOrderByWithRelationInput | Prisma.NotificationUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing NotificationUsers.
     */
    cursor?: Prisma.NotificationUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NotificationUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NotificationUsers.
     */
    skip?: number;
    distinct?: Prisma.NotificationUserScalarFieldEnum | Prisma.NotificationUserScalarFieldEnum[];
};
/**
 * NotificationUser create
 */
export type NotificationUserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: Prisma.NotificationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: Prisma.NotificationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationUserInclude<ExtArgs> | null;
    /**
     * The data needed to create a NotificationUser.
     */
    data: Prisma.XOR<Prisma.NotificationUserCreateInput, Prisma.NotificationUserUncheckedCreateInput>;
};
/**
 * NotificationUser createMany
 */
export type NotificationUserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationUsers.
     */
    data: Prisma.NotificationUserCreateManyInput | Prisma.NotificationUserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * NotificationUser createManyAndReturn
 */
export type NotificationUserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: Prisma.NotificationUserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: Prisma.NotificationUserOmit<ExtArgs> | null;
    /**
     * The data used to create many NotificationUsers.
     */
    data: Prisma.NotificationUserCreateManyInput | Prisma.NotificationUserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationUserIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * NotificationUser update
 */
export type NotificationUserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: Prisma.NotificationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: Prisma.NotificationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationUserInclude<ExtArgs> | null;
    /**
     * The data needed to update a NotificationUser.
     */
    data: Prisma.XOR<Prisma.NotificationUserUpdateInput, Prisma.NotificationUserUncheckedUpdateInput>;
    /**
     * Choose, which NotificationUser to update.
     */
    where: Prisma.NotificationUserWhereUniqueInput;
};
/**
 * NotificationUser updateMany
 */
export type NotificationUserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationUsers.
     */
    data: Prisma.XOR<Prisma.NotificationUserUpdateManyMutationInput, Prisma.NotificationUserUncheckedUpdateManyInput>;
    /**
     * Filter which NotificationUsers to update
     */
    where?: Prisma.NotificationUserWhereInput;
    /**
     * Limit how many NotificationUsers to update.
     */
    limit?: number;
};
/**
 * NotificationUser updateManyAndReturn
 */
export type NotificationUserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: Prisma.NotificationUserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: Prisma.NotificationUserOmit<ExtArgs> | null;
    /**
     * The data used to update NotificationUsers.
     */
    data: Prisma.XOR<Prisma.NotificationUserUpdateManyMutationInput, Prisma.NotificationUserUncheckedUpdateManyInput>;
    /**
     * Filter which NotificationUsers to update
     */
    where?: Prisma.NotificationUserWhereInput;
    /**
     * Limit how many NotificationUsers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationUserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * NotificationUser upsert
 */
export type NotificationUserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: Prisma.NotificationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: Prisma.NotificationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationUserInclude<ExtArgs> | null;
    /**
     * The filter to search for the NotificationUser to update in case it exists.
     */
    where: Prisma.NotificationUserWhereUniqueInput;
    /**
     * In case the NotificationUser found by the `where` argument doesn't exist, create a new NotificationUser with this data.
     */
    create: Prisma.XOR<Prisma.NotificationUserCreateInput, Prisma.NotificationUserUncheckedCreateInput>;
    /**
     * In case the NotificationUser was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.NotificationUserUpdateInput, Prisma.NotificationUserUncheckedUpdateInput>;
};
/**
 * NotificationUser delete
 */
export type NotificationUserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: Prisma.NotificationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: Prisma.NotificationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationUserInclude<ExtArgs> | null;
    /**
     * Filter which NotificationUser to delete.
     */
    where: Prisma.NotificationUserWhereUniqueInput;
};
/**
 * NotificationUser deleteMany
 */
export type NotificationUserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationUsers to delete
     */
    where?: Prisma.NotificationUserWhereInput;
    /**
     * Limit how many NotificationUsers to delete.
     */
    limit?: number;
};
/**
 * NotificationUser without action
 */
export type NotificationUserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: Prisma.NotificationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: Prisma.NotificationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationUserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=NotificationUser.d.ts.map