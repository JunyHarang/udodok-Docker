package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCouponUseHistory is a Querydsl query type for CouponUseHistory
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCouponUseHistory extends EntityPathBase<CouponUseHistory> {

    private static final long serialVersionUID = 1960676691L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCouponUseHistory couponUseHistory = new QCouponUseHistory("couponUseHistory");

    public final QCoupon coupon;

    public final DatePath<java.time.LocalDate> endDate = createDate("endDate", java.time.LocalDate.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath serialNumber = createString("serialNumber");

    public final QUser user;

    public QCouponUseHistory(String variable) {
        this(CouponUseHistory.class, forVariable(variable), INITS);
    }

    public QCouponUseHistory(Path<? extends CouponUseHistory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCouponUseHistory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCouponUseHistory(PathMetadata metadata, PathInits inits) {
        this(CouponUseHistory.class, metadata, inits);
    }

    public QCouponUseHistory(Class<? extends CouponUseHistory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.coupon = inits.isInitialized("coupon") ? new QCoupon(forProperty("coupon")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

